import { NextResponse } from "next/server";
import { getRegion } from "../../../lib/regions";
import { createCheckout } from "../../../lib/shopify";

export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const { cartItems = [], regionCode } = await request.json();
    const region = getRegion(regionCode);
    if (!region) {
      return NextResponse.json(
        { error: "Invalid checkout region." },
        { status: 400 }
      );
    }
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return NextResponse.json(
        { error: "Your cart is empty." },
        { status: 400 }
      );
    }
    const checkout = await createCheckout(cartItems, region);
    if (!checkout.checkoutUrl) {
      return NextResponse.json(
        { error: checkout.message || "Checkout is not available yet." },
        { status: 400 }
      );
    }

    // Force checkout URL to use myshopify.com domain
    let finalUrl = checkout.checkoutUrl;
    finalUrl = finalUrl.replace(
      /https?:\/\/[^/]+/,
      "https://checkout.bodylifeofficial.com"
    );

    return NextResponse.json({ checkoutUrl: finalUrl });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Unable to create checkout." },
      { status: 500 }
    );
  }
}
