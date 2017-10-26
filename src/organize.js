export default function(context) {
  const contentDrawView = context.document.currentContentViewController().contentDrawView()
  const artboards = context.document.pages()[0].layers()

  for (let i = 0; i < artboards.length; i ++) {
    const frame = contentDrawView.frame()

    frame.origin.y = i * (frame.size.height + 100)
    artboards[i].rect = frame
  }

  contentDrawView.zoomToFitRect(artboards[0].rect())
}
