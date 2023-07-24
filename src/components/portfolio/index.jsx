import Link from "next/link"
import { Col } from "react-bootstrap"

const Portfolioitem = ({ data }) => {
    return (

        <Col xs={12} sm={6} lg={4} className="ltn__gallery-item filter_category_3">
            <div className="ltn__gallery-item-inner">
                <div className="ltn__gallery-item-img">
                    <Link href={`/img/gallery/${data.thumbImage}`}>
                        <img src={`/img/gallery/${data.thumbImage}`} alt="Image" />
                        <span className="ltn__gallery-action-icon">
                            {data.icon}
                        </span>
                    </Link>
                </div>
                <div className="ltn__gallery-item-info">
                    <h4><Link href={`${slug}`}>{data.title}</Link></h4>
                    <p>{data.designation}</p>
                </div>
            </div>
        </Col>


    )
}

export default Portfolioitem