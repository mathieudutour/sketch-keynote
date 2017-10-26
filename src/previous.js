export default function(context) {
  const contentDrawView = context.document.currentContentViewController().contentDrawView()
  const artboards = context.document.pages()[0].layers()

  const currentSlide = Math.min(Math.max(
    Math.floor(
      -contentDrawView.scrollOrigin().y / (contentDrawView.frame().size.height + 100)
    ),
    0
  ), artboards.length - 1)

  contentDrawView.zoomToFitRect(artboards[Math.max(currentSlide - 1, 0)].rect())
}
