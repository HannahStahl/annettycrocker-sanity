import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Photo Gallery')
        .child(S.editor().schemaType('gallery').documentId('gallery').title('Photo Gallery')),
    ]);