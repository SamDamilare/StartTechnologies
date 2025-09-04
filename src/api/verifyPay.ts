// This would be implemented in a server environment (Node.js, serverless function, etc.)
// Not directly in your React app

import axios from "axios";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase admin client (server-side only)
const supabaseAdmin = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_ROLE_KEY || "" // Use service role key for admin operations
);

export async function verifyPaystackPayment(reference: string) {
  try {
    // Verify payment with Paystack
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const { data } = response.data;

    if (data.status === "success") {
      // Update registration status in Supabase
      const { error } = await supabaseAdmin
        .from("registrations")
        .update({
          payment_verified: true,
          payment_verification_date: new Date().toISOString(),
        })
        .eq("payment_reference", reference);

      if (error) {
        console.error("Error updating registration:", error);
        return {
          success: false,
          message: "Payment verified but registration update failed",
        };
      }

      return { success: true, message: "Payment verified successfully" };
    } else {
      return { success: false, message: "Payment verification failed" };
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    return { success: false, message: "Error verifying payment" };
  }
}
