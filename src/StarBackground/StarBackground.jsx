const StarBackGround = () => {
    return (
        <div className="star-background">
            {[...Array(100)].map((_, i) => (
                <div
                    key={i}
                    className="star"
                    style={{
                        top: `${Math.random() * 100}vh`, // Start from a random vertical position
                        left: `${Math.random() * 100}vw`, // Random horizontal position
                        animationDuration: `${Math.random() * 10 + 5}s`, // Random duration between 5s - 15s
                        animationDelay: `${Math.random() * 5}s`, // Random delay up to 5s
                    }}
                ></div>
            ))}
        </div>
    );
};

export default StarBackGround;
