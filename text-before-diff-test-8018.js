/***
 *     @author  Victor Chimenti, MSCS
 *     @file    text-before.js
 *                  text/before
 *                  Differentiator Test
 *                  id:8018
 *
 *     @version 1.0.2
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
        linkInternalUri: getContentValues('<t4 type="content" name="Link - Internal Link" output="linkurl" modifiers="nav_sections" />'),
        contentId: getContentValues('<t4 type="meta" meta="content_id" />')

    };




    /***
     *  Section Wrapper
     */
    let openSection = (diffDict.contentId.content) ? 
        '<section class="differentiators bg--dark bg--teal bg--gradient global-padding--15x oho-animate-sequence" id="intro' + diffDict.contentId.content + '">' :
        '<section class="differentiators bg--dark bg--teal bg--gradient global-padding--15x oho-animate-sequence" id="intro' + diffDict.contentName.content + '">';




    /***
     *  Grid Container
     */
    let openGrid = '<div class="grid-container">';




    /***
     *  Section Heading
     */
    let openSectionHeading = '<div class="grid-x grid-margin-x"><div class="cell large-9"><div class="section-heading--amplified text-margin-reset"></div>';




    /***
     *  Heading H2 Container
     */
    let headingContainer = (diffDict.heading.content && diffDict.prefix.content) ?
        '<h2><span class="amplified--prefix oho-animate fade-in">' + diffDict.prefix.content + '</span><span class="amplified--title oho-animate fade-in">' + diffDict.heading.content + '</span></h2>' :
        (diffDict.heading.content && !diffDict.prefix.content) ?
        '<h2><span class="amplified--title oho-animate fade-in">' + diffDict.heading.content + '</span></h2>' :
        (!diffDict.heading.content && diffDict.prefix.content) ?
        '<h2><span class="amplified--prefix oho-animate fade-in">' + diffDict.prefix.content + '</span></h2>' :
        '<span class="hidden">No valid heading entered</span>';




    /***
     *  Link Container
     */
    let linkContainer = (diffDict.linkTitle.content && diffDict.linkInternalText.content && diffDict.linkInternalUri.content) ?
        '<div class="section-heading__link global-spacing--2x oho-animate fade-in"><a href="' + diffDict.linkInternalUri.content + '" title="' + diffDict.linkInternalText.content + '">' + diffDict.linkTitle.content + '</a></div>':
        (diffDict.linkTitle.content && diffDict.linkExternal.content) ?
        '<div class="section-heading__link global-spacing--2x oho-animate fade-in"><a href="' + diffDict.linkExternal.content + '" title="' + diffDict.linkTitle.content + '">' + diffDict.linkTitle.content + '</a></div>':
        '<span class="hidden">No valid link information entered</span>';




    /***
     *  Close Section Heading
     */
    let closeSectionHeading = '</div></div></div>';




    /***
     *  Differentiators Set
     */
    let diffSet = '<div class="global-spacing--6x differentiators--set oho-animate-sequence"></div>';




    /***
    *  write document once
    * 
    * */
    writeDocument(
        [
            openSection,
            openGrid,
            openSectionHeading,
            headingContainer,
            linkContainer,
            closeSectionHeading,
            diffSet
        ]
    );
 
 
 
 
} catch (err) {
    document.write(err.message);
}


{/* <section class="differentiators bg--dark bg--teal bg--gradient global-padding--15x oho-animate-sequence" id="intro<t4 type='meta' meta='content_id' />">
    
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

        <div class="global-spacing--6x differentiators--set oho-animate-sequence"></div> */}
