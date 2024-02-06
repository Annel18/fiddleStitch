export default function OrganiserBox() {
    const groups = []
    const favourites=[]

    return (
        <section className='stitchBox'>

                <h5 >Groups</h5>
                <div >
                    {groups
                        .map((group, i) => {
                            return (
                                <div className='stitches' key={i}>
                                    <img className='stitchBoxIcon' src={group.logo} alt={group.title} title={group.title} />
                                    <p className='stitchBoxTitle'>{group.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <h5 >Favourites</h5>
                <div >
                    {favourites
                        .map((favourite, i) => {
                            return (
                                <div className='stitches' key={i}>
                                    <img className='stitchBoxIcon' src={favourite.logo} alt={favourite.title} title={favourite.title} />
                                    <p className='stitchBoxTitle'>{favourite.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
        </section>
    )
}