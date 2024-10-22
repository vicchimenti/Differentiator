/***
 *     @author  Victor Chimenti, MSCS
 *     @file    text-before.js
 *                  text/before
 *                  Differentiator Test
 *                  id:8018
 *
 *     @version 1.0.1
 * 
 */




/***
 *      Import T4 Utilities
 */
// importClass(com.terminalfour.media.IMediaManager);
importClass(com.terminalfour.spring.ApplicationContextProvider);
importClass(com.terminalfour.publish.utils.BrokerUtils);
// importClass(com.terminalfour.media.utils.ImageInfo);




/***
 *      Extract values from T4 element tags
 *      and confirm valid existing content item field
 */
function getContentValues(tag) {
    try {
        let _tag = BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, tag).trim();
        return {
            isError: false,
            content: _tag == '' ? null : _tag
        };
    } catch (error) {
        return {
            isError: true,
            message: error.message
        };
    }
}




/***
 *      Write the document
 */
function writeDocument(array) {

    for (let i = 0; i < array.length; i++) {

        document.write(array[i]);
    }
}


 

/***
 *  Main
 */
try {


    /***
     *      Dictionary of content
     * */
    let diffDict = {

        contentName: getContentValues('<t4 type="content" name="Name" output="normal" modifiers="striptags,htmlentities" />'),
        prefix: getContentValues('<t4 type="content" name="Prefix" output="normal" modifiers="striptags,htmlentities" />'),
        heading: getContentValues('<t4 type="content" name="Heading" output="normal" modifiers="striptags,htmlentities" />'),
        linkTitle: getContentValues('<t4 type="content" name="Link - Title" output="normal" modifiers="striptags,htmlentities" />'),
        linkExternal: getContentValues('<t4 type="content" name="Link - External URL" output="normal" modifiers="striptags,htmlentities" />'),
        linkInternalText: getContentValues('<t4 type="content" name="Link - Internal Link" output="linktext" modifiers="nav_sections" />'),
        linkExternalUri: getContentValues('<t4 type="content" name="Link - Internal Link" output="linkurl" modifiers="nav_sections" />'),


        headline: getContentValues('<t4 type="content" name="Title" output="normal" modifiers="striptags,htmlentities" />'),
        articleSetup: getContentValues('<t4 type="content" name="Article Setup" output="normal" modifiers="striptags,htmlentities" />'),
        articleSubhead: getContentValues('<t4 type="content" name="Article Subhead" output="normal" modifiers="striptags,htmlentities" />'),
        mediaImage: getContentValues('<t4 type="content" name="Media Library Image" output="normal" formatter="path/*" />'),
        externalImage: getContentValues('<t4 type="content" name="Image" output="imageurl" />'),
        externalImageAlt: getContentValues('<t4 type="content" name="Alt text" output="normal" modifiers="striptags,htmlentities" />'),
        imageCredit: getContentValues('<t4 type="content" name="Image Credit" output="normal" modifiers="striptags,htmlentities" />'),
        caption: getContentValues('<t4 type="content" name="Image Caption" output="normal" modifiers="striptags,htmlentities" />'),
        publishDate: getContentValues('<t4 type="content" name="Publish Date" output="normal" date_format="MMMM d, yyyy" />'),
        author: getContentValues('<t4 type="content" name="Author" output="normal" modifiers="striptags,htmlentities" />'),
        topics: getContentValues('<t4 type="content" name="Topics" output="normal" display_field="name" modifiers="htmlentities" />'),
        fullStory: getContentValues('<t4 type="content" name="Story article" output="normal" modifiers="medialibrary,nav_sections" />'),


        contentId: getContentValues('<t4 type="meta" meta="content_id" />')

    };


<section class="differentiators bg--dark bg--teal bg--gradient global-padding--15x oho-animate-sequence" id="intro<t4 type='meta' meta='content_id' />">
    <div class="grid-container">
        <div class="grid-x grid-margin-x">
            <div class="cell large-9">
                <div class="section-heading--amplified text-margin-reset">
                    <h2>
                        <t4 type="content" name="Prefix" output="selective-output" process-format="true" format="<span class=&quot;amplified--prefix oho-animate fade-in&quot;><t4 type=&quot;content&quot; name=&quot;Prefix&quot; output=&quot;normal&quot; modifiers=&quot;striptags,htmlentities&quot; /></span>" />
                        <t4 type="content" name="Heading" output="selective-output" process-format="true" format="<span class=&quot;amplified--title oho-animate fade-in&quot;><t4 type=&quot;content&quot; name=&quot;Heading&quot; output=&quot;normal&quot; modifiers=&quot;striptags,htmlentities&quot; /></span>" />
                    </h2>
                    <t4 type="content" name="Link - Title" output="selective-output" process-format="true" format="<div class=&quot;section-heading__link global-spacing--2x oho-animate fade-in&quot;>
                        <a href=&quot;<t4 type=&quot;content&quot; name=&quot;Link - Internal Link&quot; output=&quot;linkurl&quot; modifiers=&quot;nav_sections&quot; /><t4 type=&quot;content&quot; name=&quot;Link - External URL&quot; output=&quot;normal&quot; />&quot; title=&quot;Visit <t4 type=&quot;content&quot; name=&quot;Link - Title&quot; output=&quot;normal&quot; modifiers=&quot;striptags,htmlentities&quot; />&quot;><t4 type=&quot;content&quot; name=&quot;Link - Title&quot; output=&quot;normal&quot; modifiers=&quot;striptags,htmlentities&quot; /></a>
                    </div>" />
                </div>
            </div>
        </div>

        <div class="global-spacing--6x differentiators--set oho-animate-sequence">



        /***
          *  write document once
          * 
          * */
         writeDocument(
             [
                articleWrapper,
                fulltextNewsDict.anchor.content,
                openContainer,
                openRow,
                openColMd9,
                formattedTopics,
                titleWrapper,
                closeColMd9,
                closeRow,
                openRow,
                openByline,
                byLine,
                dateString,
                closeByline,
                closeRow,
                closeContainer,
                openImageWrapper,
                imageString,
                openImgAttributes,
                openRow,
                imageCreditString,
                captionString,
                closeRow,
                closeImgAttributes,
                closeImageWrapper,
                openSummaryContainer,
                openRow,
                openColMd3,
                closeColMd3,
                openBody,
                summaryString,
                fullStoryString,
                closeBody,
                closeRow,
                closeSummaryContainer,
                closeWrapper
             ]
         );
 
 
 
 
     } catch (err) {
         document.write(err.message);
     }
