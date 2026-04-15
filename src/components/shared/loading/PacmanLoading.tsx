export default function PacmanLoading() {
  return (
    <>
      <style>{`
        .pacman-loading {
          width: 22px;
          aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(farthest-side, #000 98%, #0000) 55% 20%/4.4px 4.4px no-repeat, #ffcc00;
          box-shadow: 1px -3px 7px 0px inset rgba(0, 0, 0, 0.7);
          animation: pacman 0.5s infinite steps(5) alternate;
        }
        @keyframes pacman {
          0% {
            clip-path: polygon(50% 50%, 100% 0, 100% 0, 0 0, 0 100%, 100% 100%, 100% 100%);
          }
          100% {
            clip-path: polygon(50% 50%, 100% 65%, 100% 0, 0 0, 0 100%, 100% 100%, 100% 35%);
          }
        }
      `}</style>
      <div className="pacman-loading"></div>
    </>
  )
}
