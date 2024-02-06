import BO from '../assets/stitches/BO.svg'
import C2B from '../assets/stitches/C2B.svg'
import C2F from '../assets/stitches/C2F.svg'
import C4B from '../assets/stitches/C4B.svg'
import C4F from '../assets/stitches/C4F.svg'
import CO from '../assets/stitches/CO.svg'
import k from '../assets/stitches/k.svg'
import k2tog from '../assets/stitches/k2tog.svg'
import m1l from '../assets/stitches/m1l.svg'
import m1pl from '../assets/stitches/m1pl.svg'
import m1pr from '../assets/stitches/m1pr.svg'
import m1r from '../assets/stitches/m1r.svg'
import noStitch from '../assets/stitches/noStitch.svg'
import p from '../assets/stitches/p.svg'
import p2tog from '../assets/stitches/p2tog.svg'
import p2togTbl from '../assets/stitches/p2togTbl.svg'
import pm from '../assets/stitches/pm.svg'
import sm from '../assets/stitches/sm.svg'
import ssk from '../assets/stitches/ssk.svg'
import yo from '../assets/stitches/yo.svg'

export default function StitchesCollection() {
    const stitches = [
        { title: 'Knit', abreviation: 'k', category: 'Basic stitches', logo: k },
        { title: 'Purl', abreviation: 'p', category: 'Basic stitches', logo: p },
        { title: 'No stitch', abreviation: '', category: 'Basic stitches', logo: noStitch },
        { title: 'Make 1 left leaning', abreviation: 'm1l', category: 'Knit increases', logo: m1l },
        { title: 'Make 1 right leaning', abreviation: 'm1r', category: 'Knit increases', logo: m1r },
        { title: 'Make 1 purlwise left leaning', abreviation: 'm1pl', category: 'Purl increases', logo: m1pl },
        { title: 'Make 1 purlwise right leaning', abreviation: 'm1pr', category: 'Purl increases', logo: m1pr },
        { title: 'Yarn over', abreviation: 'yo', category: 'Yarn over increases', logo: yo },
        { title: 'Knit 2 together', abreviation: 'k2tog', category: 'Knit decreases', logo: k2tog },
        { title: 'Slip, slip, knit', abreviation: 'ssk', category: 'Knit decreases', logo: ssk },
        { title: 'Purl 2 together', abreviation: 'p2tog', category: 'Purl decreases', logo: p2tog },
        { title: 'Purl 2 together through the back loop', abreviation: 'p2tog tbl', category: 'Purl decreases', logo: p2togTbl },
        { title: 'Cable 2 Back', abreviation: '1/1 RC', category: 'Cables', logo: C2B },
        { title: 'Cable 2 Front', abreviation: '1/1 LC', category: 'Cables', logo: C2F },
        { title: 'Cable 4 Back', abreviation: '2/2 RC', category: 'Cables', logo: C4B },
        { title: 'Cable 4 Front', abreviation: '2/2 LC', category: 'Cables', logo: C4F },
        { title: 'Bind Off', abreviation: 'BO', category: 'Miscellaneous', logo: BO },
        { title: 'Cast On', abreviation: 'CO', category: 'Miscellaneous', logo: CO },
        { title: 'Place marker', abreviation: 'pm', category: 'Miscellaneous', logo: pm },
        { title: 'Slip marker', abreviation: 'sm', category: 'Miscellaneous', logo: sm },
    ]

    const categoriesAll = []
    stitches.forEach(stitch =>
        categoriesAll.push(stitch.category)
    )
    const categories = categoriesAll.filter((a, b) => categoriesAll.indexOf(a) === b)


    return (
        <section className='stitchBox'>
            {categories
                .map((category, i) => {
                    return (
                        <div key={i} >
                            <h5 >{category}</h5>
                            <div >
                                {stitches
                                    .filter(stitch => stitch.category.includes(category))
                                    .map((stitch, i) => {
                                        return (
                                            <div className='stitches' key={i}>
                                                <img className='stitchBoxIcon' src={stitch.logo} alt={stitch.title} title={stitch.title} />
                                                <p className='stitchBoxTitle'>{stitch.abreviation}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })}
        </section>
    )
}