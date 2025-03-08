const StarBackGround = () => {
    return (
        <div className="star-background">
            {[...Array(100)].map((_, i) => (
                <div
                    key={i}
                    className="star"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                ></div>
            ))}
        </div>
    )
}

export default StarBackGround