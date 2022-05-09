import { CloseButton } from "../CloseButton";
import { useState } from "react";

import { FeedbackTypeStep } from "./Step/FeedbackTypeStep";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackContentStep } from "./Step/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Step/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            src: bugImageUrl,
            alt: 'Imgaem de um inseto',
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            src: ideaImageUrl,
            alt: 'Imagem de uma lâmpada',
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            src: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento',
        },
    }
};

export type FeedbackType = keyof typeof feedbackTypes;


export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSend, setFeedbackSend] = useState(false);
    
    function handleFeedbackRestart() {
        setFeedbackSend(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vh-2rem)] md:w-auto">
            
            {feedbackSend ? (
                <FeedbackSuccessStep onFeedbackRestartRequest={handleFeedbackRestart} />
                ) : (
                    <>
                        {!feedbackType ? (
                            <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
                        ) : (
                            <FeedbackContentStep 
                                feedbackType={feedbackType}
                                onFeedbackRestartRequest={handleFeedbackRestart}
                                onFeedbackSend={() => setFeedbackSend(true)}
                            />
                        )}  
                    </>
                )
            }

            <footer className="text-xs text-neutral-400 mt-4">feito com ❤ pela <a href="#" className="underline outline-offset-4">Rocketseat</a></footer>
        </div>
    );
}