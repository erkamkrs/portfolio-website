import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import * as cheerio from "cheerio";

export async function GET(request: NextRequest) {
    try {
        const { data } = await axios.get("https://baloncestoenvivo.feb.es/jugador/950826/2439563");
        const $ = cheerio.load(data);

        const extractNumber = (selector: string): number => {
            const text = $(selector).text().trim();
            const cleanedText = text.replace(/,/g, ".").replace(/[^\d.]/g, ""); // Remove non-numeric except decimals
            const num = parseFloat(cleanedText);
            return isNaN(num) ? 0 : parseFloat(num.toFixed(1)); // Ensure one decimal place
        };

        const points = extractNumber("td.puntos");
        const rebounds = extractNumber("td.rebotes.total");
        const assists = extractNumber("td.asistencias");
        const blocks = extractNumber("td.tapones.favor");
        const steals = extractNumber("td.recuperaciones");
        const threePointers = extractNumber("td.tiros.tres");

        return NextResponse.json({ points, rebounds, assists, blocks, steals, threePointers });
    } catch (error) {
        console.error("Error fetching stats:", error);
        return NextResponse.json({ error: "Error fetching stats" }, { status: 500 });
    }
}
