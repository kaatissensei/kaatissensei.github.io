import { Badge } from './badge'
import { Button } from './button'
import { Card, CardAction, CardDescription, CardFooter, CardContent, CardHeader, CardTitle } from './card'
//Simport { img } from 'motion/react-client'


export function ActivityCard({
    gameTitle, gameDescription, imgSrc, gameURL, downloadURL="", altopediaURL=""
}:{
    gameTitle: string, gameDescription: string, imgSrc: string, gameURL: string, downloadURL:string, altopediaURL: string
}) {
  const handleImageClick = () => {
    if (gameURL) {
      window.open(gameURL, '_blank');
    }
  };

  return (
    <Card className ="relative mx-auto w-full max-w-sm pt-0 p-px flex flex-col overflow-hidden">
        <div className="absolute inset-0 z-30 aspect-video rounded-t-lg" />
        <img
            src={imgSrc}
            alt={`${gameTitle} Thumbnail`}
            onClick={handleImageClick}
            className="content-start z-35 aspect-video w-full object-cover brightness-100 rounded-t-xl cursor-pointer hover:brightness-110 transition-brightness"
        />
        <CardHeader className="justify-start">
            <CardTitle className="justify-start" style={{fontSize: '1.5rem', fontWeight: 600}}>{gameTitle}
                {/*<CardAction>
                    <Badge variant="secondary">New</Badge>
                </CardAction>
                */}
            </CardTitle>
            <CardDescription className= "w-full">
                {gameDescription}
            </CardDescription>
        </CardHeader>
            <CardFooter className='relative flex justify-center pb-2'>
                {downloadURL && <Button asChild><a href={downloadURL}>Downloads</a></Button>}
                {altopediaURL && <Button className={downloadURL ? 'ml-2' : ''} asChild><a href={altopediaURL}>View on Altopedia</a></Button>}
            </CardFooter>
    </Card>
  )
}