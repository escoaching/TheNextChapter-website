"use client";

import React, { useEffect, useRef } from "react";

// Define interfaces for the Shopify Buy Button SDK to avoid using 'any'
interface ShopifyComponent {
  destroy: () => void;
}

interface ShopifyUI {
  createComponent: (type: string, options: object) => Promise<ShopifyComponent>;
}

// This is an opaque object from the Shopify SDK. We don't need to know its properties.
type ShopifyClient = object;

interface ShopifyBuy {
  buildClient: (config: { domain: string; storefrontAccessToken: string; }) => ShopifyClient;
  UI: {
    onReady: (client: ShopifyClient) => Promise<ShopifyUI>;
  };
}

declare global {
  interface Window {
    ShopifyBuy?: ShopifyBuy;
  }
}

interface ShopifyBuyButtonProps {
  domId: string;
  productId: string;
  options: object;
}

const ShopifyBuyButton: React.FC<ShopifyBuyButtonProps> = ({ domId, productId, options }) => {
  const componentRef = useRef<ShopifyComponent | null>(null);
  const nodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

    const ShopifyBuyInit = () => {
      if (!window.ShopifyBuy) {
        return;
      }
      
      // Ensure the target node is clean before doing anything.
      if (nodeRef.current) {
        nodeRef.current.innerHTML = '';
      }
      
      if (componentRef.current) {
        componentRef.current.destroy();
        componentRef.current = null;
      }

      const client = window.ShopifyBuy.buildClient({
        domain: 'hvsbmz-yf.myshopify.com',
        storefrontAccessToken: '01491e5fb9e462078cc7d3f06f09036f',
      });
      
      window.ShopifyBuy.UI.onReady(client).then((ui: ShopifyUI) => {
        const node = nodeRef.current;
        if (node) {
            ui.createComponent('product', {
            id: productId,
            node: node,
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: options,
            }).then((component: ShopifyComponent) => {
            componentRef.current = component;
            });
        }
      });
    }

    if (window.ShopifyBuy && window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }

    return () => {
      if (componentRef.current) {
        componentRef.current.destroy();
        componentRef.current = null;
      }
    };
  }, [domId, productId, options]);

  return <div id={domId} ref={nodeRef}></div>;
}

export default ShopifyBuyButton; 