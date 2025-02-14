import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FadeIn } from "../ui/fadeIn";

type Stats = {
    points: number;
    rebounds: number;
    assists: number;
    blocks: number;
    steals: number;
    additional?: string;
    threePointers?: number;
    link?: string;
};

const STATS: { [key: string]: Stats } = {
    "2020": {
        points: 15.4,
        rebounds: 6.8,
        assists: 1.6,
        blocks: 1.2,
        steals: 0.9,
        link: "https://senatornation.com/sports/mens-basketball/roster/erkam-kiris/2647",
    },
    "2021-22": {
        points: 8.5,
        rebounds: 4.7,
        assists: 0,
        blocks: 0.4,
        steals: 0.7,
        additional: "Promotion to LEB Silver",
        link: "https://baloncestoenvivo.feb.es/jugador/858042/2439563",
    },
    "2022-23": {
        points: 14.5,
        rebounds: 8.6,
        assists: 1.6,
        blocks: 0.7,
        steals: 0.7,
        link: "https://baloncestoenvivo.feb.es/jugador/889440/2439563",
    },
};



export default function Stats() {
    const [currentStats, setCurrentStats] = useState<Stats | null>(null);
    const statLink = "https://baloncestoenvivo.feb.es/jugador/950826/2439563"
    useEffect(() => {
        async function getStats() {
            try {
                const response = await fetch('/api/stats');  // Fetch from Next.js API
                const stats = await response.json();
                console.log("Fetched Stats:", stats);
                setCurrentStats(stats);
            } catch (error) {
                console.error("Error fetching stats:", error);
            }
        }
        getStats();
    }, []);

    return (
        <section id="stats" className="container py-8 md:py-12 lg:py-24">
            <FadeIn>
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-8">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Career Statistics</h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Season averages and achievements
                    </p>
                </div>
                <Card className="max-w-[2000px] mx-auto">
                    <CardHeader>
                        <CardTitle>Season Averages</CardTitle>
                    </CardHeader>
                    <CardContent className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Season</TableHead>
                                    <TableHead>Points</TableHead>
                                    <TableHead>Rebounds</TableHead>
                                    <TableHead>Assists</TableHead>
                                    <TableHead>Blocks</TableHead>
                                    <TableHead>Steals</TableHead>
                                    <TableHead>Additional</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {Object.entries(STATS).map(([season, stats]) => (
                                    <TableRow key={season}>
                                        <TableCell className="font-medium">
                                            <a href={stats.link}>{season}</a>
                                        </TableCell>
                                        <TableCell><a href={stats.link}>{stats.points}</a></TableCell>
                                        <TableCell><a href={stats.link}>{stats.rebounds}</a></TableCell>
                                        <TableCell><a href={stats.link}>{stats.assists}</a></TableCell>
                                        <TableCell><a href={stats.link}>{stats.blocks}</a></TableCell>
                                        <TableCell><a href={stats.link}>{stats.steals}</a></TableCell>
                                        <TableCell><a href={stats.link}>{stats.additional || "-"}</a></TableCell>
                                    </TableRow>
                                ))}
                                {currentStats && (
                                    <TableRow key="2024-25">
                                        <TableCell className="font-medium">
                                            <a href="https://baloncestoenvivo.feb.es/jugador/950826/2439563">2024-25</a>
                                        </TableCell>
                                        <TableCell><a href={statLink}>{currentStats.points}</a></TableCell>
                                        <TableCell><a href={statLink}>{currentStats.rebounds}</a></TableCell>
                                        <TableCell><a href={statLink}>{currentStats.assists}</a></TableCell>
                                        <TableCell><a href={statLink}>{currentStats.blocks}</a></TableCell>
                                        <TableCell><a href={statLink}>{currentStats.steals}</a></TableCell>
                                        <TableCell><a href={statLink}>{currentStats.threePointers}% 3pt</a></TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </FadeIn>
        </section>
    );
}
