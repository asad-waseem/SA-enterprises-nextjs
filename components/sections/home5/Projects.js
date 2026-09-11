import Link from "next/link"
import dynamic from 'next/dynamic'
const PortfolioFilter5 = dynamic(() => import('@/components/elements/PortfolioFilter5'), {
    ssr: false,
})

export default function Projects() {
    return (
        <>
            <section className="projects-section-three">
                <div className="auto-container">
                    <div className="sec-title style-four text-center">
                        <h2>Our projects make uniqueness <br /> from others</h2>
                        <span className="text-decoration-three" />
                    </div>
                   <PortfolioFilter5/>
                    <div className="bottom-text">We've been working hard to impress you. <Link href="#">Start your’s today <i className="fa fa-caret-right" /></Link></div>
                </div>
            </section>
        </>
    )
}
