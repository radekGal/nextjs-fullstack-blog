export const Footer = () => {
  return(
    <footer>
      <div className="container mx-auto py-11 text-center border-t-[1px]">
        <h3>The Blogger &copy;{new Date().getFullYear()}</h3>
      </div>
    </footer>
  )
}