import { ActivityCard } from "../components/ui/activity-card";
import {useState, useEffect} from "react"
import kaatissenseiGameList from "./kaatissensei-game-list.json"

interface Games  {
    gameTitle: string;
    gameDescription: string;
    imgSrc: string;
    gameURL: string;
    downloadURL: string;
    altopediaURL: string;
}


export default function GameCards() {
    const [gameData, setGameData] = useState<Games[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        // Use the imported JSON directly (requires "resolveJsonModule" in tsconfig)
        try {
            setGameData(kaatissenseiGameList as Games[]);
        }
        catch (err) {
            setError(err instanceof Error ? err : new Error(String(err)));
        } finally {
            setIsLoading(false);
        }
    }, []);
    
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!gameData.length) return <div></div>;

  return (
    <div className="bg-green grid w-full gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10">
        {gameData.map((game) => (
            <ActivityCard key={game.gameTitle}
                gameTitle={game.gameTitle}
                gameDescription={game.gameDescription}
                imgSrc={game.imgSrc}
                gameURL={game.gameURL}
                downloadURL={game.downloadURL}
                altopediaURL={game.altopediaURL}
                />
        ))}
    </div>
  );
}