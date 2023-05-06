import "./home.css";
import { AnimatedPage } from "../AnimatedPage";
import { Link } from "react-router-dom";
import { Portfolio } from "./Portfolio";
function Home() {
  return (
    <>
      <div className="clouds overflow-scroll">
        <div className=" bg-black/100 h-full w-full ">
          <AnimatedPage>
            <section
              id="about"
              className="bg-transparent flex items-center justify-around overflow-auto"
            >
              <div className="about_me flex  items-center     md:ml-24 md:flex-row space-x-6 pt-20 ">
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-3xl font-bold text-white text-left">
                    I write code that's not just functional <br /> but{" "}
                    <span className="text-[#FFF200]">beautiful </span>too
                  </h1>

                  <div className="text-lg font-normal text-white max-w-2xl mt-6 text-justify ">
                    I'm a MERN stack developer, I can build a website from
                    scratch, giving it a unique design and functionality. I can
                    also build backend API's using Node.js and Express
                    independently or in a team environment using Agile
                    methodologies like Scrum and Kanban and version control
                    tools like Git . I have working knowledge of modern
                    production tools like Docker, Git, CI/CD, and many more. My
                    entire experience is academic, and I'm now looking for an
                    internship or a job to acquire some real-world experience.
                  </div>
                </div>
              </div>

              {/* ============================== */}

              <div className="marquee-wrapper mt-12 ">
                <article className="wrapper">
                  <div className="marquee">
                    <div className="marquee__group">
                      <svg>
                        <use xlinkHref="#nodejs" />
                      </svg>
                      <svg>
                        <use xlinkHref="#mongodb" />
                      </svg>
                      <svg>
                        <use xlinkHref="#javascript" />
                      </svg>
                      <svg>
                        <use xlinkHref="#nextjs" />
                      </svg>
                      <svg>
                        <use xlinkHref="#docker" />
                      </svg>
                      <svg>
                        <use xlinkHref="#git" />
                      </svg>
                      <svg>
                        <use xlinkHref="#notion" />
                      </svg>
                      <svg>
                        <use xlinkHref="#hulu" />
                      </svg>
                    </div>
                    <div aria-hidden="true" className="marquee__group">
                      <svg>
                        <use xlinkHref="#nodejs" />
                      </svg>
                      <svg>
                        <use xlinkHref="#mongodb" />
                      </svg>
                      <svg>
                        <use xlinkHref="#javascript" />
                      </svg>
                      <svg>
                        <use xlinkHref="#nextjs" />
                      </svg>
                      <svg>
                        <use xlinkHref="#docker" />
                      </svg>
                      <svg>
                        <use xlinkHref="#git" />
                      </svg>
                      <svg>
                        <use xlinkHref="#notion" />
                      </svg>
                      <svg>
                        <use xlinkHref="#hulu" />
                      </svg>
                    </div>
                  </div>
                  <div className="marquee marquee--reverse">
                    <div className="marquee__group">
                      <svg>
                        <use xlinkHref="#hulu" />
                      </svg>
                      <svg>
                        <use xlinkHref="#notion" />
                      </svg>
                      <svg>
                        <use xlinkHref="#git" />
                      </svg>
                      <svg>
                        <use xlinkHref="#docker" />
                      </svg>
                      <svg>
                        <use xlinkHref="#nextjs" />
                      </svg>
                      <svg>
                        <use xlinkHref="#javascript" />
                      </svg>
                      <svg>
                        <use xlinkHref="#mongodb" />
                      </svg>
                      <svg>
                        <use xlinkHref="#nodejs" />
                      </svg>
                    </div>
                    <div aria-hidden="true" className="marquee__group">
                      <svg>
                        <use xlinkHref="#hulu" />
                      </svg>
                      <svg>
                        <use xlinkHref="#notion" />
                      </svg>
                      <svg>
                        <use xlinkHref="#git" />
                      </svg>
                      <svg>
                        <use xlinkHref="#docker" />
                      </svg>
                      <svg>
                        <use xlinkHref="#nextjs" />
                      </svg>
                      <svg>
                        <use xlinkHref="#javascript" />
                      </svg>
                      <svg>
                        <use xlinkHref="#mongodb" />
                      </svg>
                      <svg>
                        <use xlinkHref="#nodejs" />
                      </svg>
                    </div>
                  </div>
                </article>
                <svg
                  style={{ display: "none" }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <symbol id="nodejs" viewBox="0 0 128 128">
                      <path
                        fill="#83CD29"
                        d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
                      />
                    </symbol>
                    <symbol id="mongodb" viewBox="0 0 128 128">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#439934"
                        d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051-.169-24.252 1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#45A538"
                        d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#46A037"
                        d="M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#409433"
                        d="M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182a49.142 49.142 0 01-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753a41.402 41.402 0 01-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#4FAA41"
                        d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642a4498.887 4498.887 0 00-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6167.476 6167.476 0 016.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78-.167 10.052z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#4AA73C"
                        d="M43.155 32.227c.21.274.511.516.617.826a4498.887 4498.887 0 016.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9a3888.972 3888.972 0 00-5.242-15.551c-.089-.263-.34-.469-.516-.702l3.272-8.84z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#57AE47"
                        d="M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198a6167.476 6167.476 0 00-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#60B24F"
                        d="M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#A9AA88"
                        d="M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011a41.402 41.402 0 001.394 9.838c-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#B6B598"
                        d="M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#C2C1A7"
                        d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#CECDB7"
                        d="M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#DBDAC7"
                        d="M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#EBE9DC"
                        d="M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#CECDB7"
                        d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#4FAA41"
                        d="M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z"
                      />
                    </symbol>
                    <symbol id="javascript" viewBox="0 0 128 128">
                      <path
                        fill="#F0DB4F"
                        d="M1.408 1.408h125.184v125.185H1.408z"
                      />
                      <path
                        fill="#323330"
                        d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                      />
                    </symbol>
                    <symbol id="nextjs" viewBox="0 0 128 128">
                      <path d="M30.2 45.9h24.1v1.9H32.4v14.4H53v1.9H32.4v15.8h22.2v1.9H30.2V45.9zm26.3 0h2.6l11.4 15.8L82 45.9l15.8-20-26 37.5 13.4 18.4h-2.7L70.4 65 58.2 81.8h-2.6l13.5-18.4-12.6-17.5zm29.7 1.9v-1.9h27.5v1.9H101v34h-2.2v-34H86.2zM0 45.9h2.7l38.2 56.8-15.8-20.9L2.3 48.6l-.1 33.2H0zm113.5 33.4c.5 0 .8-.3.8-.8s-.3-.8-.8-.8-.8.3-.8.8.4.8.8.8zm2.2-2.1c0 1.3 1 2.2 2.4 2.2 1.5 0 2.4-.9 2.4-2.5v-5.5h-1.2v5.5c0 .9-.4 1.3-1.2 1.3-.7 0-1.2-.4-1.2-1.1h-1.2zm6.3-.1c.1 1.4 1.2 2.3 3 2.3s3-.9 3-2.4c0-1.2-.7-1.8-2.2-2.2l-.9-.2c-1-.2-1.4-.6-1.4-1.1 0-.7.6-1.2 1.6-1.2.9 0 1.5.4 1.6 1.2h1.2c-.1-1.3-1.2-2.2-2.8-2.2-1.7 0-2.8.9-2.8 2.3 0 1.1.6 1.8 2 2.1l1 .2c1 .2 1.5.6 1.5 1.2 0 .7-.7 1.2-1.7 1.2s-1.8-.5-1.9-1.2H122z" />
                    </symbol>
                    <symbol id="docker" viewBox="0 0 128 128">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#3A4D54"
                        d="M73.8 50.8h11.3v11.5h5.7c2.6 0 5.3-.5 7.8-1.3 1.2-.4 2.6-1 3.8-1.7-1.6-2.1-2.4-4.7-2.6-7.3-.3-3.5.4-8.1 2.8-10.8l1.2-1.4 1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4 4.3-1.3 9.3-1 13.1 1.2l1.5.9-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8-9.8 24.3-31 35.8-56.8 35.8-13.3 0-25.5-5-32.5-16.8l-.1-.2-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6V50.8h11.3V39.6h22.5V28.3h13.5v22.5z"
                      />
                      <path
                        fill="#00AADA"
                        d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7H18.6c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.7-10.5-1.8-13.9-.1z"
                      />
                      <path
                        fill="#28B8EB"
                        d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-68c-.3 9.5 3.2 16.7 9.5 21 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4l-.1-.1c8.5 4.4 20.8 4.3 35-1.1 15.8-6.1 30.6-17.7 40.9-30.9-.2.1-.4.1-.5.2z"
                      />
                      <path
                        fill="#028BB8"
                        d="M18.7 71.8c.4 3.3 1.4 6.4 2.9 9.3l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4h-.4c-1.3.1-2.7.1-4.1.1-1.6 0-3.2 0-4.9-.1 6 6.8 15.5 10.8 27.3 10.8 21.4 0 40-8.1 50.8-26H18.7v-.1z"
                      />
                      <path
                        fill="#019BC6"
                        d="M23.5 71.8c1.3 5.8 4.3 10.4 8.8 13.5 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.6 1.4 8.5 4.4 20.8 4.3 34.9-1.1 8.5-3.3 16.8-8.2 24.2-14.1H23.5z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#00ACD3"
                        d="M28.4 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3-12h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#23C2EE"
                        d="M39.6 52.7h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#00ACD3"
                        d="M50.9 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#23C2EE"
                        d="M50.9 41.5h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3.1 10.4H72v9.8h-9.8v-9.8zm.8.8h.8v8.1H63v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#00ACD3"
                        d="M62.2 41.5H72v9.8h-9.8v-9.8zm.8.8h.8v8.1H63v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#23C2EE"
                        d="M62.2 30.2H72V40h-9.8v-9.8zm.8.8h.8v8.1H63V31zm1.5 0h.8v8.1h-.8V31zm1.4 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#00ACD3"
                        d="M73.5 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#D4EEF1"
                        d="M48.8 78.3c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#3A4D54"
                        d="M48.8 79.1c.2 0 .5 0 .7.1-.2.1-.4.4-.4.7 0 .4.4.8.8.8.3 0 .6-.2.7-.4.1.2.1.5.1.7 0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9 0-1 .8-1.9 1.9-1.9M1.1 72.8h125.4c-2.7-.7-8.6-1.6-7.7-5.2-5 5.7-16.9 4-20 1.2-3.4 4.9-23 3-24.3-.8-4.2 5-17.3 5-21.5 0-1.4 3.8-21 5.7-24.3.8-3 2.8-15 4.5-20-1.2 1.1 3.5-4.9 4.5-7.6 5.2"
                      />
                      <path
                        fill="#BFDBE0"
                        d="M56 97.8c-6.7-3.2-10.3-7.5-12.4-12.2-2.5.7-5.5 1.2-8.9 1.4-1.3.1-2.7.1-4.1.1-1.7 0-3.4 0-5.2-.1 6 6 13.6 10.7 27.5 10.8H56z"
                      />
                      <path
                        fill="#D4EEF1"
                        d="M46.1 89.9c-.9-1.3-1.8-2.8-2.5-4.3-2.5.7-5.5 1.2-8.9 1.4 2.3 1.2 5.7 2.4 11.4 2.9z"
                      />
                    </symbol>
                    <symbol id="git" viewBox="0 0 128 128">
                      <path
                        fill="#F34F29"
                        d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"
                      />
                    </symbol>
                    <symbol id="notion" viewBox="0 0 128 128">
                      <path
                        fill="#9B4F96"
                        d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
                      />
                      <path
                        fill="#68217A"
                        d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
                      />
                      <path
                        fill="#fff"
                        d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"
                      />
                    </symbol>
                    <symbol id="hulu" viewBox="0 0 128 128">
                      <path
                        d="M42.489 5.002c-.606.018-1.258.239-1.998.814-1.813-.689-3.57-.928-5.142.474-2.427-.31-3.216.33-3.814 1.077-.532-.011-3.986-.54-5.57 1.788-3.98-.464-5.239 2.306-3.814 4.889-.812 1.24-1.655 2.464.246 4.827-.672 1.317-.255 2.744 1.33 4.473-.419 1.85.403 3.155 1.877 4.173-.276 2.531 2.357 4.004 3.143 4.528.302 1.475.932 2.868 3.94 3.637.495 2.2 2.303 2.579 4.053 3.04-5.785 3.313-10.746 7.67-10.712 18.363l-.848 1.49c-6.633 3.973-12.601 16.743-3.269 27.123.61 3.25 1.632 5.583 2.542 8.166 1.362 10.409 10.247 15.282 12.59 15.859 3.435 2.576 7.092 5.02 12.042 6.733 4.665 4.74 9.72 6.546 14.803 6.544h.224c5.083.003 10.138-1.804 14.803-6.544 4.95-1.712 8.607-4.157 12.041-6.733 2.344-.577 11.229-5.45 12.59-15.86.91-2.582 1.933-4.915 2.543-8.165 9.332-10.38 3.364-23.152-3.27-27.126l-.848-1.488c.034-10.692-4.927-15.05-10.712-18.363 1.75-.461 3.558-.841 4.054-3.04 3.007-.77 3.636-2.162 3.938-3.637.787-.525 3.42-1.997 3.144-4.53 1.474-1.016 2.296-2.322 1.878-4.172 1.584-1.728 2-3.156 1.328-4.472 1.902-2.362 1.058-3.587.246-4.827 1.425-2.583.168-5.353-3.814-4.889-1.584-2.327-5.037-1.798-5.57-1.788-.598-.747-1.387-1.387-3.814-1.077-1.571-1.401-3.329-1.162-5.142-.473-2.152-1.673-3.577-.332-5.204.175-2.606-.84-3.202.31-4.482.778-2.842-.592-3.706.696-5.069 2.056l-1.585-.031c-4.286 2.488-6.416 7.555-7.17 10.16-.756-2.606-2.88-7.673-7.166-10.16l-1.585.03c-1.364-1.36-2.228-2.647-5.07-2.055-1.28-.468-1.875-1.617-4.483-.778-1.068-.333-2.05-1.025-3.206-.99l.002.001"
                        fill="#050606"
                      />
                      <path
                        d="M34.04 15.95c11.373 5.774 17.984 10.447 21.606 14.426-1.854 7.323-11.531 7.657-15.07 7.451.725-.332 1.33-.73 1.544-1.34-.888-.622-4.036-.066-6.234-1.283.844-.172 1.239-.34 1.634-.953-2.077-.653-4.313-1.215-5.629-2.296.71.01 1.373.157 2.3-.477-1.86-.987-3.845-1.769-5.386-3.278.96-.023 1.998-.01 2.3-.358-1.703-1.038-3.14-2.194-4.328-3.457 1.346.16 1.914.022 2.24-.21-1.288-1.297-2.916-2.393-3.693-3.993 1 .34 1.914.47 2.573-.03-.438-.972-2.311-1.545-3.39-3.815 1.052.1 2.168.226 2.391 0-.488-1.96-1.326-3.061-2.148-4.202 2.251-.033 5.662.008 5.508-.18l-1.392-1.4c2.199-.583 4.449.094 6.083.596.733-.57-.013-1.29-.908-2.027 1.869.246 3.557.67 5.083 1.252.816-.725-.529-1.45-1.18-2.176 2.888.54 4.111 1.298 5.326 2.057.883-.833.05-1.54-.544-2.265 2.177.794 3.298 1.82 4.479 2.831.4-.532 1.016-.922.272-2.206 1.545.878 2.71 1.912 3.57 3.07.957-.6.57-1.42.576-2.175 1.606 1.287 2.626 2.656 3.874 3.994.25-.18.47-.792.665-1.759 3.832 3.662 9.247 12.886 1.392 16.543-6.685-5.43-14.67-9.378-23.517-12.34h.002m60.239 0c-11.373 5.775-17.984 10.446-21.606 14.426 1.855 7.323 11.532 7.657 15.07 7.451-.725-.332-1.329-.73-1.543-1.34.888-.622 4.036-.066 6.234-1.283-.844-.172-1.24-.34-1.634-.953 2.076-.653 4.313-1.215 5.628-2.296-.71.01-1.373.157-2.3-.477 1.86-.987 3.845-1.769 5.387-3.278-.962-.023-1.998-.01-2.3-.358 1.703-1.038 3.139-2.194 4.328-3.457-1.346.16-1.914.022-2.24-.21 1.287-1.297 2.916-2.393 3.692-3.993-.999.34-1.913.47-2.572-.03.437-.972 2.31-1.545 3.39-3.815-1.053.1-2.168.226-2.392 0 .49-1.96 1.327-3.062 2.149-4.203-2.251-.033-5.662.008-5.508-.179l1.393-1.4c-2.2-.584-4.45.093-6.083.595-.734-.57.013-1.29.907-2.027-1.868.246-3.557.67-5.083 1.252-.816-.725.529-1.45 1.18-2.176-2.887.54-4.11 1.298-5.326 2.057-.882-.833-.05-1.54.544-2.265-2.177.794-3.298 1.82-4.478 2.831-.4-.532-1.017-.922-.273-2.206-1.545.878-2.71 1.912-3.57 3.07-.957-.6-.57-1.42-.576-2.175-1.606 1.287-2.626 2.657-3.873 3.994-.251-.18-.471-.792-.666-1.759-3.832 3.662-9.247 12.886-1.392 16.543 6.682-5.432 14.665-9.379 23.514-12.34h-.001"
                        fill="#63c54d"
                      />
                      <path
                        d="M77.913 90.52c.04 6.833-6.028 12.402-13.551 12.438-7.524.036-13.655-5.474-13.695-12.308v-.13c-.04-6.834 6.027-12.403 13.551-12.439 7.524-.036 13.655 5.474 13.695 12.308v.13M56.672 55.173c5.645 3.642 6.662 11.9 2.273 18.442-4.39 6.543-12.524 8.894-18.169 5.251-5.644-3.642-6.662-11.9-2.273-18.442 4.39-6.543 12.524-8.894 18.169-5.251m15.236-.66c-5.645 3.643-6.663 11.9-2.273 18.443 4.39 6.542 12.524 8.894 18.168 5.25 5.645-3.642 6.663-11.899 2.273-18.442-4.39-6.542-12.523-8.893-18.168-5.25m-43.099 6.652c6.094-1.609 2.057 24.835-2.901 22.665-5.455-4.321-7.212-16.977 2.9-22.665m70.43-.329c-6.095-1.609-2.058 24.835 2.901 22.666 5.455-4.322 7.211-16.978-2.901-22.666m-20.44-19.73c10.517-1.75 19.268 4.405 18.915 15.639-.346 4.306-22.79-14.998-18.915-15.64m-29.059-.329c-10.519-1.75-19.27 4.407-18.916 15.64.346 4.306 22.79-14.999 18.916-15.64m14.489-2.62c-6.277-.16-12.301 4.59-12.316 7.344-.017 3.348 4.963 6.775 12.36 6.862 7.552.053 12.371-2.743 12.396-6.198.027-3.914-6.87-8.068-12.44-8.008m.485 68.645c5.473-.236 12.817 1.736 12.831 4.351.091 2.54-6.66 8.278-13.194 8.168-6.767.287-13.402-5.46-13.315-7.452-.101-2.921 8.24-5.201 13.678-5.067M44.459 91.3c3.896 4.625 5.672 12.748 2.421 15.142-3.076 1.829-10.547 1.076-15.858-6.438-3.58-6.304-3.119-12.72-.604-14.605 3.76-2.256 9.57.791 14.04 5.901m39.232-1.465c-4.217 4.864-6.565 13.735-3.489 16.592 2.94 2.22 10.834 1.91 16.666-6.06 4.234-5.352 2.815-14.29.397-16.664-3.593-2.738-8.75.765-13.575 6.13v.002"
                        fill="#c51850"
                      />
                    </symbol>
                  </defs>
                </svg>
              </div>
            </section>

            <div className="flex flex-col items-center justify-center mt-12">
              <h1 className="text-4xl font-bold text-white text-left">
                Problem solving & big O's?{" "}
                <span className="text-[#FFF200]">I'm unrivalled</span>
              </h1>

              <div className="flex gap-4 text-gray-300 mt-4">
                <a
                  href="https://leetcode.com/remarkablejames/"
                  className="hover:underline hover:text-[#FFF200]"
                >
                  LeetCode
                </a>
                <a
                  href="https://www.hackerrank.com/remarkablejames"
                  className="hover:underline hover:text-[#FFF200]"
                >
                  HackerRank
                </a>
                <a
                  href="https://github.com/remarkablejames"
                  className="hover:underline hover:text-[#FFF200]"
                >
                  GitHub
                </a>
              </div>

              <Link
                to="/portfolio"
                element={Portfolio}
                className=" bg-[#FFF200] text-black rounded-md px-12 py-2 m-2 mt-12 transition duration-500 ease select-none hover:bg-[#a3ba23]  focus:outline-none focus:shadow-outline"
              >
                My Portfolio
              </Link>
            </div>
            <div></div>
          </AnimatedPage>
        </div>
      </div>
    </>
  );
}

export default Home;
