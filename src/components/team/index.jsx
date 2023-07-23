import Link from 'next/link';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
const TeamItem = ({ data, additionalClassname }) => {
    return (<>
        <div class={`ltn__team-item ${additionalClassname}`}>
            <div class="team-img">
                <img src={`/img/team/${data.image}`} alt="Image" />
            </div>
            <div class="team-info">
                <h4><Link href="team-details.html">{data.name}</Link></h4>
                <h6 class="ltn__secondary-color">{data.designation}</h6>
                <div class="ltn__social-media">
                    <ul>
                        <li><Link href="#"> <FaFacebookF /> </Link></li>
                        <li><Link href="#"><FaTwitter /></Link></li>
                        <li><Link href="#"><FaInstagram /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </>)

}

export default TeamItem