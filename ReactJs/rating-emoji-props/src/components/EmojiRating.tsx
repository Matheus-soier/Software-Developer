type Props = {
    rate: number;
}

export const EmojiRating = ({rate}: Props) => {
   
    rate > 5 ? rate = 5 : rate;
    rate < 0 ? rate = 0 : rate;
    
    let emoji = ['☹️','🙄','😯','😏','😁'];
    const rateInt = Math.floor(rate);
    const stars = `${emoji[rateInt - 1]}`.repeat(rateInt) + '😶'.repeat(5 - rateInt)

    return (
        <div className="flex items-center text-3xl text-white gap-3">
            <div className="bg-gray-700 p-2 rounded">{rate.toFixed(1)}</div>
             <div>{stars}</div>
        </div>
    );
}