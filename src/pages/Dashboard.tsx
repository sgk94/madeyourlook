import PageLayout from "../components/PageLayout";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { getPreferredStyles } from "../lib/localStorageUtils";
import { fetchShopifyProducts } from "../lib/fetchShopfiyProducts";

export default function Dashboard() {
  const { user } = useAuth();
  const [prompt, setPrompt] = useState("");

  const buildOutfitPrompt = async () => {
    const styles = getPreferredStyles();
    const products = await fetchShopifyProducts(10); // or any limit

    const productList = products
      .map((p, i) => `${i + 1}. ${p.id} ${p.title} - ${p.price}`)
      .join("\n");

    const prompt = `
      You are a fashion stylist AI helping users create outfits.

      The user prefers the following style(s): ${styles.join(", ")}.

      Here is their current clothing inventory:
      ${productList}

      Pick one **top**, one **bottom**, and one **pair of shoes** that go well together and match the user's preferred style. Do not include accessories or socks.

      Respond in this **JSON format**:
      {
        "styleUsed": "${styles[0]}",
        "top": "...",
        "bottom": "...",
        "shoes": "...",
        "reason": "..."
      }

      Please only return valid JSON with no extra explanation or formatting.
    `;

    setPrompt(prompt);
  };

  return (
    <PageLayout>
      <div className="max-w-md mx-auto mt-12 p-4 border rounded space-y-4">
        <h2 className="text-xl font-semibold">Welcome, {user?.email}</h2>
        <div></div>
        <button
          onClick={buildOutfitPrompt}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Generate Outfit
        </button>

        <div>Prompt</div>
        <div>{prompt}</div>
      </div>
    </PageLayout>
  );
}
