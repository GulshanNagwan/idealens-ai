import { analyzeStartup } from "@/lib/gemini";

export async function POST(req) {

  try {

    const body = await req.json();

    const prompt = `
Analyze this startup idea professionally.

Startup Name:
${body.startupName}

Industry:
${body.industry}

Audience:
${body.audience}

Budget:
${body.budget}

Idea:
${body.idea}

Return ONLY valid JSON:

{
  "marketDemand": "",
  "competitors": ["", "", ""],
  "strengths": ["", "", ""],
  "weaknesses": ["", "", ""],
  "opportunities": ["", "", ""],
  "threats": ["", "", ""],
  "startupPitch": "",
  "innovationScore": 0,
  "scalabilityScore": 0,
  "investmentPotential": 0
}
`;

    const raw = await analyzeStartup(prompt);

    const cleaned = raw
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(cleaned);

    return Response.json(parsed);

  } catch (error) {

    console.log(error);

    return Response.json({
      marketDemand: "AI analysis failed.",
      competitors: [],
      strengths: [],
      weaknesses: [],
      opportunities: [],
      threats: [],
      startupPitch: error.message,
      innovationScore: 0,
      scalabilityScore: 0,
      investmentPotential: 0,
    });

  }

}