import Link from "next/link"

export default function Menu() {
    return (
        <ul className="navigation clearfix">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li className="dropdown"><Link href="/solutions">Solutions</Link>
                <ul>
                    <li><Link href="/solutions">All Solutions</Link></li>
                    <li><Link href="/solutions/it-hardware">IT Hardware</Link></li>
                    <li><Link href="/solutions/office-equipment">Office Equipment</Link></li>
                    <li><Link href="/solutions/networking">Networking Equipment</Link></li>
                    <li><Link href="/solutions/printing-consumables">Printing &amp; Consumables</Link></li>
                    <li><Link href="/solutions/accessories">Accessories &amp; Essentials</Link></li>
                    <li><Link href="/solutions/custom-procurement">Custom Demand &amp; Sourcing</Link></li>
                </ul>
            </li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/industries">Industries</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
    )
}
