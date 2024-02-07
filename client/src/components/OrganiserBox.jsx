export default function OrganiserBox() {
    const groups = []
    const favourites = []

    return (
        <section className='stitchBox-container'>
            <h4 className='toolBox-header'>ORGANISER</h4>
            <div className='stitchBox'>
                <h5>Grouped components</h5>
                <div>
                    {groups.map((group) => (
                        <>
                            <div className='stitches' key={group.id}>
                                <img className='stitchBoxIcon' src={group.logo} alt={group.title} title={group.title} />
                                <p className='stitchBoxTitle'>{group.title}</p>
                            </div>
                        </>
                    ))}
                </div>
                <h5>Favourites</h5>
                <div>
                    {favourites.map((favourite) => (
                        <>
                            <div className='stitches' key={favourite.id}>
                                <img className='stitchBoxIcon' src={favourite.logo} alt={favourite.title} title={favourite.title} />
                                <p className='stitchBoxTitle'>{favourite.title}</p>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </section>
    )
}
