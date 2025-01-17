import * as Icon from "react-feather";
import ImageModal from "./imageModal";

export default function Card(props) {
  return (
    <div
      className="card"
      // onClick={() => Router.push(`/societies/${props.shortform}`)}
    >
      <div className="intro">
        <ImageModal images={`/election/${props.RollNo}.jpeg`} title={props.Name} ProposalLink={props.ProposalLink} />
        {/* <img src={require(`../public/societies/${props.shortform}.png`)} alt={`Picture of ${props.name}`} /> */}
      </div>

      <div className="card-content">
        <h3>
          <span>{props.Name}</span>
          <p>
            {props.Hall} | {props.Description}
          </p>
        </h3>
        <hr />
        {props.FacebookLink !== "" && (
          <a href={props.FacebookLink} target="_blank" rel="noreferrer noopener">
            <Icon.Facebook />
          </a>
        )}
        {props.ProposalLink !== "" && (
          <a href={`/election/${props.ProposalLink}`} target="_blank" rel="noreferrer noopener">
            &thinsp;&thinsp;
            <Icon.Airplay />
          </a>
        )}
        {props.Email !== "" && (
          <a href={`mailto:${props.Email}`} target="_blank" rel="noreferrer noopener">
            &thinsp;&thinsp;
            <Icon.Mail />
          </a>
        )}
      </div>
    </div>
  );
}
