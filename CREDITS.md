<img alt="Chocolatey logo" width="260" style="margin-right: 1rem;" src="https://img.chocolatey.org/logos/chocolatey.png"> <img alt="Chocolatey icon logo" width="200" src="https://img.chocolatey.org/logos/chocolatey-icon.png">

# choco-theme Third Party Licenses

---

Chocolatey uses a number of 3rd party components. Their details are below.

* [Open Source License Types (Reference)](#open-source-license-types-reference)
  * [Apache v2.0 License](#apache-v20-license)
  * [Attribution 4.0 International License](#attribution-40-international-license)
  * [BSD-2-Clause License](#bsd-2-clause-license)
  * [ISC License](#isc-license)
  * [MIT License](#mit-license)
  * [MIT No Attribution License](#mit-no-attribution-license)
  * [Mozilla Public License 2.0 License](#mozilla-public-license-20-license)
  * [SIL OPEN FONT 1.1 LICENSE](#sil-open-font-11-license)
* [Chocolatey Software Component License](#chocolatey-software-component-licenses)
  * [Chocolatey Open Source](#chocolatey-open-source)
* [choco-theme](#choco-theme)
  * [Apache v2.0 License](#apache-v20-license-1)
    * [@playwright/test@1.52.0](#playwrighttest1520)
    * [fuse.js@7.1.0](#fusejs710)
    * [typescript@5.8.3](#typescript583)
  * [Attribution 4.0 International License](#attribution-40-international-license-1)
    * [@fortawesome/fontawesome-free@6.7.2](#fortawesomefontawesome-free672)
  * [BSD-2-Clause License](#bsd-2-clause-license-1)
    * [@typescript-eslint/parser@7.18.0](#typescript-eslintparser7180)
  * [ISC License](#isc-license-1)
    * [chartist-plugin-legend@0.6.2](#chartist-plugin-legend062)
    * [eslint-plugin-promise@6.6.0](#eslint-plugin-promise660)
    * [rimraf@5.0.10](#rimraf5010)
  * [MIT License](#mit-license-1)
    * [@eonasdan/tempus-dominus@6.10.3](#eonasdantempus-dominus6103)
    * [@eslint/eslintrc@3.3.1](#eslinteslintrc331)
    * [@eslint/js@9.25.1](#eslintjs9251)
    * [@fortawesome/fontawesome-free@6.7.2](#fortawesomefontawesome-free672-1)
    * [@microsoft/signalr@8.0.7](#microsoftsignalr807)
    * [@types/bootstrap@5.2.10](#typesbootstrap5210)
    * [@types/luxon@3.6.2](#typesluxon362)
    * [@types/node@20.17.30](#typesnode201730)
    * [@typescript-eslint/eslint-plugin@7.18.0](#typescript-eslinteslint-plugin7180)
    * [abp-web-resources@5.9.3](#abp-web-resources593)
    * [axe-html-reporter@2.2.11](#axe-html-reporter2211)
    * [block-ui@2.70.1](#block-ui2701)
    * [bootstrap@5.3.3](#bootstrap533)
    * [chartist@0.11.4](#chartist0114)
    * [clipboard@2.0.11](#clipboard2011)
    * [cropperjs@1.6.2](#cropperjs162)
    * [cssnano@cssnano@6.1.2](#cssnanocssnano612)
    * [datatables.net-bs5@2.2.2](#datatablesnet-bs5222)
    * [datatables.net-dt@2.2.2](#datatablesnet-dt222)
    * [esbuild@0.25.2](#esbuild0252)
    * [eslint@9.25.1](#eslint9251)
    * [eslint-config-standard@17.1.0](#eslint-config-standard1710)
    * [eslint-plugin-import@2.31.0](#eslint-plugin-import2310)
    * [eslint-plugin-n@16.6.2](#eslint-plugin-n1662)
    * [eslint-plugin-playwright@1.8.3](#eslint-plugin-playwright183)
    * [flatpickr@4.6.13](#flatpickr4613)
    * [globals@15.15.0](#globals15150)
    * [jquery@3.7.1](#jquery371)
    * [jquery-serializejson@3.2.1](#jquery-serializejson321)
    * [jquery-validation@1.21.0](#jquery-validation1210)
    * [jstree@3.3.17](#jstree3317)
    * [luxon@3.6.1](#luxon361)
    * [marked@12.0.2](#marked1202)
    * [moment@2.30.1](#moment2301)
    * [moment-timezone@0.5.48](#moment-timezone0548)
    * [mustache@4.2.0](#mustache420)
    * [npm-run-all2@6.2.6](#npm-run-all2626)
    * [postcss@8.5.3](#postcss853)
    * [postcss-cli@11.0.1](#postcss-cli1101)
    * [purgecss@6.0.0](#purgecss600)
    * [pwstrength-bootstrap@3.1.3](#pwstrength-bootstrap313)
    * [sortablejs@1.15.6](#sortablejs1156)
    * [spin.js@4.1.2](#spinjs412)
    * [stylelint@16.18.0](#stylelint16180)
    * [stylelint-config-standard@36.0.1](#stylelint-config-standard3601)
    * [stylelint-config-standard-scss@13.1.0](#stylelint-config-standard-scss1310)
    * [stylelint-config-twbs-bootstrap@14.2.0](#stylelint-config-twbs-bootstrap1420)
    * [sweetalert2@11.19.1](#sweetalert211191)
    * [timeago@1.6.7](#timeago167)
    * [ts-node@10.9.2](#ts-node1092)
    * [tsx@4.19.3](#tsx4193)
    * [underscore@1.13.7](#underscore1137)
  * [MIT No Attribution License](#mit-no-attribution-license-1)
    * [postcss-preset-env@9.6.0](#postcss-preset-env960)
  * [Mozilla Public License 2.0 License](#mozilla-public-license-20-license-1)
    * [@axe-core/playwright@4.10.1](#axe-coreplaywright4101)
  * [SIL OPEN FONT 1.1 LICENSE](#sil-open-font-11-license-1)
    * [@fortawesome/fontawesome-free@6.7.2](#fortawesomefontawesome-free672-2)

## Open Source License Types (Reference)

There are some regularly used open source license types - to reduce the sheer size of this document, we will provide a reference to them here. Each particular component will link directly to the actual license or notice file.

### Apache v2.0 License

The [Apache v2.0 License](https://www.apache.org/licenses/LICENSE-2.0) has the following terms:

```text
                              Apache License
                        Version 2.0, January 2004
                     http://www.apache.org/licenses/

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

1. Definitions.

  "License" shall mean the terms and conditions for use, reproduction,
  and distribution as defined by Sections 1 through 9 of this document.

  "Licensor" shall mean the copyright owner or entity authorized by
  the copyright owner that is granting the License.

  "Legal Entity" shall mean the union of the acting entity and all
  other entities that control, are controlled by, or are under common
  control with that entity. For the purposes of this definition,
  "control" means (i) the power, direct or indirect, to cause the
  direction or management of such entity, whether by contract or
  otherwise, or (ii) ownership of fifty percent (50%) or more of the
  outstanding shares, or (iii) beneficial ownership of such entity.

  "You" (or "Your") shall mean an individual or Legal Entity
  exercising permissions granted by this License.

  "Source" form shall mean the preferred form for making modifications,
  including but not limited to software source code, documentation
  source, and configuration files.

  "Object" form shall mean any form resulting from mechanical
  transformation or translation of a Source form, including but
  not limited to compiled object code, generated documentation,
  and conversions to other media types.

  "Work" shall mean the work of authorship, whether in Source or
  Object form, made available under the License, as indicated by a
  copyright notice that is included in or attached to the work
  (an example is provided in the Appendix below).

  "Derivative Works" shall mean any work, whether in Source or Object
  form, that is based on (or derived from) the Work and for which the
  editorial revisions, annotations, elaborations, or other modifications
  represent, as a whole, an original work of authorship. For the purposes
  of this License, Derivative Works shall not include works that remain
  separable from, or merely link (or bind by name) to the interfaces of,
  the Work and Derivative Works thereof.

  "Contribution" shall mean any work of authorship, including
  the original version of the Work and any modifications or additions
  to that Work or Derivative Works thereof, that is intentionally
  submitted to Licensor for inclusion in the Work by the copyright owner
  or by an individual or Legal Entity authorized to submit on behalf of
  the copyright owner. For the purposes of this definition, "submitted"
  means any form of electronic, verbal, or written communication sent
  to the Licensor or its representatives, including but not limited to
  communication on electronic mailing lists, source code control systems,
  and issue tracking systems that are managed by, or on behalf of, the
  Licensor for the purpose of discussing and improving the Work, but
  excluding communication that is conspicuously marked or otherwise
  designated in writing by the copyright owner as "Not a Contribution."

  "Contributor" shall mean Licensor and any individual or Legal Entity
  on behalf of whom a Contribution has been received by Licensor and
  subsequently incorporated within the Work.

2. Grant of Copyright License. Subject to the terms and conditions of
  this License, each Contributor hereby grants to You a perpetual,
  worldwide, non-exclusive, no-charge, royalty-free, irrevocable
  copyright license to reproduce, prepare Derivative Works of,
  publicly display, publicly perform, sublicense, and distribute the
  Work and such Derivative Works in Source or Object form.

3. Grant of Patent License. Subject to the terms and conditions of
  this License, each Contributor hereby grants to You a perpetual,
  worldwide, non-exclusive, no-charge, royalty-free, irrevocable
  (except as stated in this section) patent license to make, have made,
  use, offer to sell, sell, import, and otherwise transfer the Work,
  where such license applies only to those patent claims licensable
  by such Contributor that are necessarily infringed by their
  Contribution(s) alone or by combination of their Contribution(s)
  with the Work to which such Contribution(s) was submitted. If You
  institute patent litigation against any entity (including a
  cross-claim or counterclaim in a lawsuit) alleging that the Work
  or a Contribution incorporated within the Work constitutes direct
  or contributory patent infringement, then any patent licenses
  granted to You under this License for that Work shall terminate
  as of the date such litigation is filed.

4. Redistribution. You may reproduce and distribute copies of the
  Work or Derivative Works thereof in any medium, with or without
  modifications, and in Source or Object form, provided that You
  meet the following conditions:

  (a) You must give any other recipients of the Work or
      Derivative Works a copy of this License; and

  (b) You must cause any modified files to carry prominent notices
      stating that You changed the files; and

  (c) You must retain, in the Source form of any Derivative Works
      that You distribute, all copyright, patent, trademark, and
      attribution notices from the Source form of the Work,
      excluding those notices that do not pertain to any part of
      the Derivative Works; and

  (d) If the Work includes a "NOTICE" text file as part of its
      distribution, then any Derivative Works that You distribute must
      include a readable copy of the attribution notices contained
      within such NOTICE file, excluding those notices that do not
      pertain to any part of the Derivative Works, in at least one
      of the following places: within a NOTICE text file distributed
      as part of the Derivative Works; within the Source form or
      documentation, if provided along with the Derivative Works; or,
      within a display generated by the Derivative Works, if and
      wherever such third-party notices normally appear. The contents
      of the NOTICE file are for informational purposes only and
      do not modify the License. You may add Your own attribution
      notices within Derivative Works that You distribute, alongside
      or as an addendum to the NOTICE text from the Work, provided
      that such additional attribution notices cannot be construed
      as modifying the License.

  You may add Your own copyright statement to Your modifications and
  may provide additional or different license terms and conditions
  for use, reproduction, or distribution of Your modifications, or
  for any such Derivative Works as a whole, provided Your use,
  reproduction, and distribution of the Work otherwise complies with
  the conditions stated in this License.

5. Submission of Contributions. Unless You explicitly state otherwise,
  any Contribution intentionally submitted for inclusion in the Work
  by You to the Licensor shall be under the terms and conditions of
  this License, without any additional terms or conditions.
  Notwithstanding the above, nothing herein shall supersede or modify
  the terms of any separate license agreement you may have executed
  with Licensor regarding such Contributions.

6. Trademarks. This License does not grant permission to use the trade
  names, trademarks, service marks, or product names of the Licensor,
  except as required for reasonable and customary use in describing the
  origin of the Work and reproducing the content of the NOTICE file.

7. Disclaimer of Warranty. Unless required by applicable law or
  agreed to in writing, Licensor provides the Work (and each
  Contributor provides its Contributions) on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied, including, without limitation, any warranties or conditions
  of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
  PARTICULAR PURPOSE. You are solely responsible for determining the
  appropriateness of using or redistributing the Work and assume any
  risks associated with Your exercise of permissions under this License.

8. Limitation of Liability. In no event and under no legal theory,
  whether in tort (including negligence), contract, or otherwise,
  unless required by applicable law (such as deliberate and grossly
  negligent acts) or agreed to in writing, shall any Contributor be
  liable to You for damages, including any direct, indirect, special,
  incidental, or consequential damages of any character arising as a
  result of this License or out of the use or inability to use the
  Work (including but not limited to damages for loss of goodwill,
  work stoppage, computer failure or malfunction, or any and all
  other commercial damages or losses), even if such Contributor
  has been advised of the possibility of such damages.

9. Accepting Warranty or Additional Liability. While redistributing
  the Work or Derivative Works thereof, You may choose to offer,
  and charge a fee for, acceptance of support, warranty, indemnity,
  or other liability obligations and/or rights consistent with this
  License. However, in accepting such obligations, You may act only
  on Your own behalf and on Your sole responsibility, not on behalf
  of any other Contributor, and only if You agree to indemnify,
  defend, and hold each Contributor harmless for any liability
  incurred by, or claims asserted against, such Contributor by reason
  of your accepting any such warranty or additional liability.

END OF TERMS AND CONDITIONS
```

### Attribution 4.0 International License

The [Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/legalcode.txt) has the following terms:

```text
Attribution 4.0 International

=======================================================================

Creative Commons Corporation ("Creative Commons") is not a law firm and
does not provide legal services or legal advice. Distribution of
Creative Commons public licenses does not create a lawyer-client or
other relationship. Creative Commons makes its licenses and related
information available on an "as-is" basis. Creative Commons gives no
warranties regarding its licenses, any material licensed under their
terms and conditions, or any related information. Creative Commons
disclaims all liability for damages resulting from their use to the
fullest extent possible.

Using Creative Commons Public Licenses

Creative Commons public licenses provide a standard set of terms and
conditions that creators and other rights holders may use to share
original works of authorship and other material subject to copyright
and certain other rights specified in the public license below. The
following considerations are for informational purposes only, are not
exhaustive, and do not form part of our licenses.

     Considerations for licensors: Our public licenses are
     intended for use by those authorized to give the public
     permission to use material in ways otherwise restricted by
     copyright and certain other rights. Our licenses are
     irrevocable. Licensors should read and understand the terms
     and conditions of the license they choose before applying it.
     Licensors should also secure all rights necessary before
     applying our licenses so that the public can reuse the
     material as expected. Licensors should clearly mark any
     material not subject to the license. This includes other CC-
     licensed material, or material used under an exception or
     limitation to copyright. More considerations for licensors:
    wiki.creativecommons.org/Considerations_for_licensors

     Considerations for the public: By using one of our public
     licenses, a licensor grants the public permission to use the
     licensed material under specified terms and conditions. If
     the licensor's permission is not necessary for any reason--for
     example, because of any applicable exception or limitation to
     copyright--then that use is not regulated by the license. Our
     licenses grant only permissions under copyright and certain
     other rights that a licensor has authority to grant. Use of
     the licensed material may still be restricted for other
     reasons, including because others have copyright or other
     rights in the material. A licensor may make special requests,
     such as asking that all changes be marked or described.
     Although not required by our licenses, you are encouraged to
     respect those requests where reasonable. More considerations
     for the public:
    wiki.creativecommons.org/Considerations_for_licensees

=======================================================================

Creative Commons Attribution 4.0 International Public License

By exercising the Licensed Rights (defined below), You accept and agree
to be bound by the terms and conditions of this Creative Commons
Attribution 4.0 International Public License ("Public License"). To the
extent this Public License may be interpreted as a contract, You are
granted the Licensed Rights in consideration of Your acceptance of
these terms and conditions, and the Licensor grants You such rights in
consideration of benefits the Licensor receives from making the
Licensed Material available under these terms and conditions.


Section 1 -- Definitions.

  a. Adapted Material means material subject to Copyright and Similar
     Rights that is derived from or based upon the Licensed Material
     and in which the Licensed Material is translated, altered,
     arranged, transformed, or otherwise modified in a manner requiring
     permission under the Copyright and Similar Rights held by the
     Licensor. For purposes of this Public License, where the Licensed
     Material is a musical work, performance, or sound recording,
     Adapted Material is always produced where the Licensed Material is
     synched in timed relation with a moving image.

  b. Adapter's License means the license You apply to Your Copyright
     and Similar Rights in Your contributions to Adapted Material in
     accordance with the terms and conditions of this Public License.

  c. Copyright and Similar Rights means copyright and/or similar rights
     closely related to copyright including, without limitation,
     performance, broadcast, sound recording, and Sui Generis Database
     Rights, without regard to how the rights are labeled or
     categorized. For purposes of this Public License, the rights
     specified in Section 2(b)(1)-(2) are not Copyright and Similar
     Rights.

  d. Effective Technological Measures means those measures that, in the
     absence of proper authority, may not be circumvented under laws
     fulfilling obligations under Article 11 of the WIPO Copyright
     Treaty adopted on December 20, 1996, and/or similar international
     agreements.

  e. Exceptions and Limitations means fair use, fair dealing, and/or
     any other exception or limitation to Copyright and Similar Rights
     that applies to Your use of the Licensed Material.

  f. Licensed Material means the artistic or literary work, database,
     or other material to which the Licensor applied this Public
     License.

  g. Licensed Rights means the rights granted to You subject to the
     terms and conditions of this Public License, which are limited to
     all Copyright and Similar Rights that apply to Your use of the
     Licensed Material and that the Licensor has authority to license.

  h. Licensor means the individual(s) or entity(ies) granting rights
     under this Public License.

  i. Share means to provide material to the public by any means or
     process that requires permission under the Licensed Rights, such
     as reproduction, public display, public performance, distribution,
     dissemination, communication, or importation, and to make material
     available to the public including in ways that members of the
     public may access the material from a place and at a time
     individually chosen by them.

  j. Sui Generis Database Rights means rights other than copyright
     resulting from Directive 96/9/EC of the European Parliament and of
     the Council of 11 March 1996 on the legal protection of databases,
     as amended and/or succeeded, as well as other essentially
     equivalent rights anywhere in the world.

  k. You means the individual or entity exercising the Licensed Rights
     under this Public License. Your has a corresponding meaning.


Section 2 -- Scope.

  a. License grant.

       1. Subject to the terms and conditions of this Public License,
          the Licensor hereby grants You a worldwide, royalty-free,
          non-sublicensable, non-exclusive, irrevocable license to
          exercise the Licensed Rights in the Licensed Material to:

            a. reproduce and Share the Licensed Material, in whole or
               in part; and

            b. produce, reproduce, and Share Adapted Material.

       2. Exceptions and Limitations. For the avoidance of doubt, where
          Exceptions and Limitations apply to Your use, this Public
          License does not apply, and You do not need to comply with
          its terms and conditions.

       3. Term. The term of this Public License is specified in Section
          6(a).

       4. Media and formats; technical modifications allowed. The
          Licensor authorizes You to exercise the Licensed Rights in
          all media and formats whether now known or hereafter created,
          and to make technical modifications necessary to do so. The
          Licensor waives and/or agrees not to assert any right or
          authority to forbid You from making technical modifications
          necessary to exercise the Licensed Rights, including
          technical modifications necessary to circumvent Effective
          Technological Measures. For purposes of this Public License,
          simply making modifications authorized by this Section 2(a)
          (4) never produces Adapted Material.

       5. Downstream recipients.

            a. Offer from the Licensor -- Licensed Material. Every
               recipient of the Licensed Material automatically
               receives an offer from the Licensor to exercise the
               Licensed Rights under the terms and conditions of this
               Public License.

            b. No downstream restrictions. You may not offer or impose
               any additional or different terms or conditions on, or
               apply any Effective Technological Measures to, the
               Licensed Material if doing so restricts exercise of the
               Licensed Rights by any recipient of the Licensed
               Material.

       6. No endorsement. Nothing in this Public License constitutes or
          may be construed as permission to assert or imply that You
          are, or that Your use of the Licensed Material is, connected
          with, or sponsored, endorsed, or granted official status by,
          the Licensor or others designated to receive attribution as
          provided in Section 3(a)(1)(A)(i).

  b. Other rights.

       1. Moral rights, such as the right of integrity, are not
          licensed under this Public License, nor are publicity,
          privacy, and/or other similar personality rights; however, to
          the extent possible, the Licensor waives and/or agrees not to
          assert any such rights held by the Licensor to the limited
          extent necessary to allow You to exercise the Licensed
          Rights, but not otherwise.

       2. Patent and trademark rights are not licensed under this
          Public License.

       3. To the extent possible, the Licensor waives any right to
          collect royalties from You for the exercise of the Licensed
          Rights, whether directly or through a collecting society
          under any voluntary or waivable statutory or compulsory
          licensing scheme. In all other cases the Licensor expressly
          reserves any right to collect such royalties.


Section 3 -- License Conditions.

Your exercise of the Licensed Rights is expressly made subject to the
following conditions.

  a. Attribution.

       1. If You Share the Licensed Material (including in modified
          form), You must:

            a. retain the following if it is supplied by the Licensor
               with the Licensed Material:

                 i. identification of the creator(s) of the Licensed
                    Material and any others designated to receive
                    attribution, in any reasonable manner requested by
                    the Licensor (including by pseudonym if
                    designated);

                ii. a copyright notice;

               iii. a notice that refers to this Public License;

                iv. a notice that refers to the disclaimer of
                    warranties;

                 v. a URI or hyperlink to the Licensed Material to the
                    extent reasonably practicable;

            b. indicate if You modified the Licensed Material and
               retain an indication of any previous modifications; and

            c. indicate the Licensed Material is licensed under this
               Public License, and include the text of, or the URI or
               hyperlink to, this Public License.

       2. You may satisfy the conditions in Section 3(a)(1) in any
          reasonable manner based on the medium, means, and context in
          which You Share the Licensed Material. For example, it may be
          reasonable to satisfy the conditions by providing a URI or
          hyperlink to a resource that includes the required
          information.

       3. If requested by the Licensor, You must remove any of the
          information required by Section 3(a)(1)(A) to the extent
          reasonably practicable.

       4. If You Share Adapted Material You produce, the Adapter's
          License You apply must not prevent recipients of the Adapted
          Material from complying with this Public License.


Section 4 -- Sui Generis Database Rights.

Where the Licensed Rights include Sui Generis Database Rights that
apply to Your use of the Licensed Material:

  a. for the avoidance of doubt, Section 2(a)(1) grants You the right
     to extract, reuse, reproduce, and Share all or a substantial
     portion of the contents of the database;

  b. if You include all or a substantial portion of the database
     contents in a database in which You have Sui Generis Database
     Rights, then the database in which You have Sui Generis Database
     Rights (but not its individual contents) is Adapted Material; and

  c. You must comply with the conditions in Section 3(a) if You Share
     all or a substantial portion of the contents of the database.

For the avoidance of doubt, this Section 4 supplements and does not
replace Your obligations under this Public License where the Licensed
Rights include other Copyright and Similar Rights.


Section 5 -- Disclaimer of Warranties and Limitation of Liability.

  a. UNLESS OTHERWISE SEPARATELY UNDERTAKEN BY THE LICENSOR, TO THE
     EXTENT POSSIBLE, THE LICENSOR OFFERS THE LICENSED MATERIAL AS-IS
     AND AS-AVAILABLE, AND MAKES NO REPRESENTATIONS OR WARRANTIES OF
     ANY KIND CONCERNING THE LICENSED MATERIAL, WHETHER EXPRESS,
     IMPLIED, STATUTORY, OR OTHER. THIS INCLUDES, WITHOUT LIMITATION,
     WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR
     PURPOSE, NON-INFRINGEMENT, ABSENCE OF LATENT OR OTHER DEFECTS,
     ACCURACY, OR THE PRESENCE OR ABSENCE OF ERRORS, WHETHER OR NOT
     KNOWN OR DISCOVERABLE. WHERE DISCLAIMERS OF WARRANTIES ARE NOT
     ALLOWED IN FULL OR IN PART, THIS DISCLAIMER MAY NOT APPLY TO YOU.

  b. TO THE EXTENT POSSIBLE, IN NO EVENT WILL THE LICENSOR BE LIABLE
     TO YOU ON ANY LEGAL THEORY (INCLUDING, WITHOUT LIMITATION,
     NEGLIGENCE) OR OTHERWISE FOR ANY DIRECT, SPECIAL, INDIRECT,
     INCIDENTAL, CONSEQUENTIAL, PUNITIVE, EXEMPLARY, OR OTHER LOSSES,
     COSTS, EXPENSES, OR DAMAGES ARISING OUT OF THIS PUBLIC LICENSE OR
     USE OF THE LICENSED MATERIAL, EVEN IF THE LICENSOR HAS BEEN
     ADVISED OF THE POSSIBILITY OF SUCH LOSSES, COSTS, EXPENSES, OR
     DAMAGES. WHERE A LIMITATION OF LIABILITY IS NOT ALLOWED IN FULL OR
     IN PART, THIS LIMITATION MAY NOT APPLY TO YOU.

  c. The disclaimer of warranties and limitation of liability provided
     above shall be interpreted in a manner that, to the extent
     possible, most closely approximates an absolute disclaimer and
     waiver of all liability.


Section 6 -- Term and Termination.

  a. This Public License applies for the term of the Copyright and
     Similar Rights licensed here. However, if You fail to comply with
     this Public License, then Your rights under this Public License
     terminate automatically.

  b. Where Your right to use the Licensed Material has terminated under
     Section 6(a), it reinstates:

       1. automatically as of the date the violation is cured, provided
          it is cured within 30 days of Your discovery of the
          violation; or

       2. upon express reinstatement by the Licensor.

     For the avoidance of doubt, this Section 6(b) does not affect any
     right the Licensor may have to seek remedies for Your violations
     of this Public License.

  c. For the avoidance of doubt, the Licensor may also offer the
     Licensed Material under separate terms or conditions or stop
     distributing the Licensed Material at any time; however, doing so
     will not terminate this Public License.

  d. Sections 1, 5, 6, 7, and 8 survive termination of this Public
     License.


Section 7 -- Other Terms and Conditions.

  a. The Licensor shall not be bound by any additional or different
     terms or conditions communicated by You unless expressly agreed.

  b. Any arrangements, understandings, or agreements regarding the
     Licensed Material not stated herein are separate from and
     independent of the terms and conditions of this Public License.


Section 8 -- Interpretation.

  a. For the avoidance of doubt, this Public License does not, and
     shall not be interpreted to, reduce, limit, restrict, or impose
     conditions on any use of the Licensed Material that could lawfully
     be made without permission under this Public License.

  b. To the extent possible, if any provision of this Public License is
     deemed unenforceable, it shall be automatically reformed to the
     minimum extent necessary to make it enforceable. If the provision
     cannot be reformed, it shall be severed from this Public License
     without affecting the enforceability of the remaining terms and
     conditions.

  c. No term or condition of this Public License will be waived and no
     failure to comply consented to unless expressly agreed to by the
     Licensor.

  d. Nothing in this Public License constitutes or may be interpreted
     as a limitation upon, or waiver of, any privileges and immunities
     that apply to the Licensor or You, including from the legal
     processes of any jurisdiction or authority.


=======================================================================

Creative Commons is not a party to its public
licenses. Notwithstanding, Creative Commons may elect to apply one of
its public licenses to material it publishes and in those instances
will be considered the “Licensor.” The text of the Creative Commons
public licenses is dedicated to the public domain under the CC0 Public
Domain Dedication. Except for the limited purpose of indicating that
material is shared under a Creative Commons public license or as
otherwise permitted by the Creative Commons policies published at
creativecommons.org/policies, Creative Commons does not authorize the
use of the trademark "Creative Commons" or any other trademark or logo
of Creative Commons without its prior written consent including,
without limitation, in connection with any unauthorized modifications
to any of its public licenses or any other arrangements,
understandings, or agreements concerning use of licensed material. For
the avoidance of doubt, this paragraph does not form part of the
public licenses.

Creative Commons may be contacted at creativecommons.org.
```

### BSD-2-Clause License

The [BSD 2-Clause License](https://opensource.org/license/bsd-2-clause) has also been called the "Simplified BSD License" and the "FreeBSD License." It has the following terms:

```text
Copyright <YEAR> <COPYRIGHT HOLDER>

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice,
   this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS”
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.
```

### ISC License

The [ISC License](https://opensource.org/license/isc-license-txt) has the following terms:

```text
Copyright <YEAR> <OWNER>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
```

### MIT License

The [MIT License](https://mit-license.org/) has the following terms:

```text
Copyright © <YEAR> <COPYRIGHT HOLDER>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
“Software”), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject
to the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### MIT No Attribution License

The [MIT No Attribution License](https://opensource.org/license/mit-0) has the following terms:

```text
Copyright <YEAR><COPYRIGHT HOLDER>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

### Mozilla Public License 2.0 License

The [Mozilla Public License 2.0 License](https://creativecommons.org/licenses/by/4.0/legalcode.txt) has the following terms:

```text
Mozilla Public License, version 2.0

1. Definitions

1.1. "Contributor"

     means each individual or legal entity that creates, contributes to the
     creation of, or owns Covered Software.

1.2. "Contributor Version"

     means the combination of the Contributions of others (if any) used by a
     Contributor and that particular Contributor's Contribution.

1.3. "Contribution"

     means Covered Software of a particular Contributor.

1.4. "Covered Software"

     means Source Code Form to which the initial Contributor has attached the
     notice in Exhibit A, the Executable Form of such Source Code Form, and
     Modifications of such Source Code Form, in each case including portions
     thereof.

1.5. "Incompatible With Secondary Licenses"
     means

     a. that the initial Contributor has attached the notice described in
        Exhibit B to the Covered Software; or

     b. that the Covered Software was made available under the terms of
        version 1.1 or earlier of the License, but not also under the terms of
        a Secondary License.

1.6. "Executable Form"

     means any form of the work other than Source Code Form.

1.7. "Larger Work"

     means a work that combines Covered Software with other material, in a
     separate file or files, that is not Covered Software.

1.8. "License"

     means this document.

1.9. "Licensable"

     means having the right to grant, to the maximum extent possible, whether
     at the time of the initial grant or subsequently, any and all of the
     rights conveyed by this License.

1.10. "Modifications"

     means any of the following:

     a. any file in Source Code Form that results from an addition to,
        deletion from, or modification of the contents of Covered Software; or

     b. any new file in Source Code Form that contains any Covered Software.

1.11. "Patent Claims" of a Contributor

      means any patent claim(s), including without limitation, method,
      process, and apparatus claims, in any patent Licensable by such
      Contributor that would be infringed, but for the grant of the License,
      by the making, using, selling, offering for sale, having made, import,
      or transfer of either its Contributions or its Contributor Version.

1.12. "Secondary License"

      means either the GNU General Public License, Version 2.0, the GNU Lesser
      General Public License, Version 2.1, the GNU Affero General Public
      License, Version 3.0, or any later versions of those licenses.

1.13. "Source Code Form"

      means the form of the work preferred for making modifications.

1.14. "You" (or "Your")

      means an individual or a legal entity exercising rights under this
      License. For legal entities, "You" includes any entity that controls, is
      controlled by, or is under common control with You. For purposes of this
      definition, "control" means (a) the power, direct or indirect, to cause
      the direction or management of such entity, whether by contract or
      otherwise, or (b) ownership of more than fifty percent (50%) of the
      outstanding shares or beneficial ownership of such entity.


2. License Grants and Conditions

2.1. Grants

     Each Contributor hereby grants You a world-wide, royalty-free,
     non-exclusive license:

     a. under intellectual property rights (other than patent or trademark)
        Licensable by such Contributor to use, reproduce, make available,
        modify, display, perform, distribute, and otherwise exploit its
        Contributions, either on an unmodified basis, with Modifications, or
        as part of a Larger Work; and

     b. under Patent Claims of such Contributor to make, use, sell, offer for
        sale, have made, import, and otherwise transfer either its
        Contributions or its Contributor Version.

2.2. Effective Date

     The licenses granted in Section 2.1 with respect to any Contribution
     become effective for each Contribution on the date the Contributor first
     distributes such Contribution.

2.3. Limitations on Grant Scope

     The licenses granted in this Section 2 are the only rights granted under
     this License. No additional rights or licenses will be implied from the
     distribution or licensing of Covered Software under this License.
     Notwithstanding Section 2.1(b) above, no patent license is granted by a
     Contributor:

     a. for any code that a Contributor has removed from Covered Software; or

     b. for infringements caused by: (i) Your and any other third party's
        modifications of Covered Software, or (ii) the combination of its
        Contributions with other software (except as part of its Contributor
        Version); or

     c. under Patent Claims infringed by Covered Software in the absence of
        its Contributions.

     This License does not grant any rights in the trademarks, service marks,
     or logos of any Contributor (except as may be necessary to comply with
     the notice requirements in Section 3.4).

2.4. Subsequent Licenses

     No Contributor makes additional grants as a result of Your choice to
     distribute the Covered Software under a subsequent version of this
     License (see Section 10.2) or under the terms of a Secondary License (if
     permitted under the terms of Section 3.3).

2.5. Representation

     Each Contributor represents that the Contributor believes its
     Contributions are its original creation(s) or it has sufficient rights to
     grant the rights to its Contributions conveyed by this License.

2.6. Fair Use

     This License is not intended to limit any rights You have under
     applicable copyright doctrines of fair use, fair dealing, or other
     equivalents.

2.7. Conditions

     Sections 3.1, 3.2, 3.3, and 3.4 are conditions of the licenses granted in
     Section 2.1.


3. Responsibilities

3.1. Distribution of Source Form

     All distribution of Covered Software in Source Code Form, including any
     Modifications that You create or to which You contribute, must be under
     the terms of this License. You must inform recipients that the Source
     Code Form of the Covered Software is governed by the terms of this
     License, and how they can obtain a copy of this License. You may not
     attempt to alter or restrict the recipients' rights in the Source Code
     Form.

3.2. Distribution of Executable Form

     If You distribute Covered Software in Executable Form then:

     a. such Covered Software must also be made available in Source Code Form,
        as described in Section 3.1, and You must inform recipients of the
        Executable Form how they can obtain a copy of such Source Code Form by
        reasonable means in a timely manner, at a charge no more than the cost
        of distribution to the recipient; and

     b. You may distribute such Executable Form under the terms of this
        License, or sublicense it under different terms, provided that the
        license for the Executable Form does not attempt to limit or alter the
        recipients' rights in the Source Code Form under this License.

3.3. Distribution of a Larger Work

     You may create and distribute a Larger Work under terms of Your choice,
     provided that You also comply with the requirements of this License for
     the Covered Software. If the Larger Work is a combination of Covered
     Software with a work governed by one or more Secondary Licenses, and the
     Covered Software is not Incompatible With Secondary Licenses, this
     License permits You to additionally distribute such Covered Software
     under the terms of such Secondary License(s), so that the recipient of
     the Larger Work may, at their option, further distribute the Covered
     Software under the terms of either this License or such Secondary
     License(s).

3.4. Notices

     You may not remove or alter the substance of any license notices
     (including copyright notices, patent notices, disclaimers of warranty, or
     limitations of liability) contained within the Source Code Form of the
     Covered Software, except that You may alter any license notices to the
     extent required to remedy known factual inaccuracies.

3.5. Application of Additional Terms

     You may choose to offer, and to charge a fee for, warranty, support,
     indemnity or liability obligations to one or more recipients of Covered
     Software. However, You may do so only on Your own behalf, and not on
     behalf of any Contributor. You must make it absolutely clear that any
     such warranty, support, indemnity, or liability obligation is offered by
     You alone, and You hereby agree to indemnify every Contributor for any
     liability incurred by such Contributor as a result of warranty, support,
     indemnity or liability terms You offer. You may include additional
     disclaimers of warranty and limitations of liability specific to any
     jurisdiction.

4. Inability to Comply Due to Statute or Regulation

   If it is impossible for You to comply with any of the terms of this License
   with respect to some or all of the Covered Software due to statute,
   judicial order, or regulation then You must: (a) comply with the terms of
   this License to the maximum extent possible; and (b) describe the
   limitations and the code they affect. Such description must be placed in a
   text file included with all distributions of the Covered Software under
   this License. Except to the extent prohibited by statute or regulation,
   such description must be sufficiently detailed for a recipient of ordinary
   skill to be able to understand it.

5. Termination

5.1. The rights granted under this License will terminate automatically if You
     fail to comply with any of its terms. However, if You become compliant,
     then the rights granted under this License from a particular Contributor
     are reinstated (a) provisionally, unless and until such Contributor
     explicitly and finally terminates Your grants, and (b) on an ongoing
     basis, if such Contributor fails to notify You of the non-compliance by
     some reasonable means prior to 60 days after You have come back into
     compliance. Moreover, Your grants from a particular Contributor are
     reinstated on an ongoing basis if such Contributor notifies You of the
     non-compliance by some reasonable means, this is the first time You have
     received notice of non-compliance with this License from such
     Contributor, and You become compliant prior to 30 days after Your receipt
     of the notice.

5.2. If You initiate litigation against any entity by asserting a patent
     infringement claim (excluding declaratory judgment actions,
     counter-claims, and cross-claims) alleging that a Contributor Version
     directly or indirectly infringes any patent, then the rights granted to
     You by any and all Contributors for the Covered Software under Section
     2.1 of this License shall terminate.

5.3. In the event of termination under Sections 5.1 or 5.2 above, all end user
     license agreements (excluding distributors and resellers) which have been
     validly granted by You or Your distributors under this License prior to
     termination shall survive termination.

6. Disclaimer of Warranty

   Covered Software is provided under this License on an "as is" basis,
   without warranty of any kind, either expressed, implied, or statutory,
   including, without limitation, warranties that the Covered Software is free
   of defects, merchantable, fit for a particular purpose or non-infringing.
   The entire risk as to the quality and performance of the Covered Software
   is with You. Should any Covered Software prove defective in any respect,
   You (not any Contributor) assume the cost of any necessary servicing,
   repair, or correction. This disclaimer of warranty constitutes an essential
   part of this License. No use of  any Covered Software is authorized under
   this License except under this disclaimer.

7. Limitation of Liability

   Under no circumstances and under no legal theory, whether tort (including
   negligence), contract, or otherwise, shall any Contributor, or anyone who
   distributes Covered Software as permitted above, be liable to You for any
   direct, indirect, special, incidental, or consequential damages of any
   character including, without limitation, damages for lost profits, loss of
   goodwill, work stoppage, computer failure or malfunction, or any and all
   other commercial damages or losses, even if such party shall have been
   informed of the possibility of such damages. This limitation of liability
   shall not apply to liability for death or personal injury resulting from
   such party's negligence to the extent applicable law prohibits such
   limitation. Some jurisdictions do not allow the exclusion or limitation of
   incidental or consequential damages, so this exclusion and limitation may
   not apply to You.

8. Litigation

   Any litigation relating to this License may be brought only in the courts
   of a jurisdiction where the defendant maintains its principal place of
   business and such litigation shall be governed by laws of that
   jurisdiction, without reference to its conflict-of-law provisions. Nothing
   in this Section shall prevent a party's ability to bring cross-claims or
   counter-claims.

9. Miscellaneous

   This License represents the complete agreement concerning the subject
   matter hereof. If any provision of this License is held to be
   unenforceable, such provision shall be reformed only to the extent
   necessary to make it enforceable. Any law or regulation which provides that
   the language of a contract shall be construed against the drafter shall not
   be used to construe this License against a Contributor.


10. Versions of the License

10.1. New Versions

      Mozilla Foundation is the license steward. Except as provided in Section
      10.3, no one other than the license steward has the right to modify or
      publish new versions of this License. Each version will be given a
      distinguishing version number.

10.2. Effect of New Versions

      You may distribute the Covered Software under the terms of the version
      of the License under which You originally received the Covered Software,
      or under the terms of any subsequent version published by the license
      steward.

10.3. Modified Versions

      If you create software not governed by this License, and you want to
      create a new license for such software, you may create and use a
      modified version of this License if you rename the license and remove
      any references to the name of the license steward (except to note that
      such modified license differs from this License).

10.4. Distributing Source Code Form that is Incompatible With Secondary
      Licenses If You choose to distribute Source Code Form that is
      Incompatible With Secondary Licenses under the terms of this version of
      the License, the notice described in Exhibit B of this License must be
      attached.

Exhibit A - Source Code Form License Notice

      This Source Code Form is subject to the
      terms of the Mozilla Public License, v.
      2.0. If a copy of the MPL was not
      distributed with this file, You can
      obtain one at
      http://mozilla.org/MPL/2.0/.

If it is not possible or desirable to put the notice in a particular file,
then You may include the notice in a location (such as a LICENSE file in a
relevant directory) where a recipient would be likely to look for such a
notice.

You may add additional accurate notices of copyright ownership.

Exhibit B - "Incompatible With Secondary Licenses" Notice

      This Source Code Form is "Incompatible
      With Secondary Licenses", as defined by
      the Mozilla Public License, v. 2.0.
```

### SIL OPEN FONT 1.1 LICENSE

The [SIL OPEN FONT 1.1 LICENSE](https://opensource.org/license/ofl-1-1) has the following terms:

```txt
### PREAMBLE

The goals of the Open Font License (OFL) are to stimulate worldwide development of collaborative font projects, to support the font creation efforts of academic and linguistic communities, and to provide a free and open framework in which fonts may be shared and improved in partnership with others.

The OFL allows the licensed fonts to be used, studied, modified and redistributed freely as long as they are not sold by themselves. The fonts, including any derivative works, can be bundled, embedded, redistributed and/or sold with any software provided that any reserved names are not used by derivative works. The fonts and derivatives, however, cannot be released under any other type of license. The requirement for fonts to remain under this license does not apply to any document created using the fonts or their derivatives.

### DEFINITIONS

“Font Software” refers to the set of files released by the Copyright Holder(s) under this license and clearly marked as such. This may include source files, build scripts and documentation.

“Reserved Font Name” refers to any names specified as such after the copyright statement(s).

“Original Version” refers to the collection of Font Software components as distributed by the Copyright Holder(s).

“Modified Version” refers to any derivative made by adding to, deleting, or substituting – in part or in whole – any of the components of the Original Version, by changing formats or by porting the Font Software to a new environment.

“Author” refers to any designer, engineer, programmer, technical writer or other person who contributed to the Font Software.

### PERMISSION & CONDITIONS

Permission is hereby granted, free of charge, to any person obtaining a copy of the Font Software, to use, study, copy, merge, embed, modify, redistribute, and sell modified and unmodified copies of the Font Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components, in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled, redistributed and/or sold with any software, provided that each copy contains the above copyright notice and this license. These can be included either as stand-alone text files, human-readable headers or in the appropriate machine-readable metadata fields within text or binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font Name(s) unless explicit written permission is granted by the corresponding Copyright Holder. This restriction only applies to the primary font name as presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font Software shall not be used to promote, endorse or advertise any Modified Version, except to acknowledge the contribution(s) of the Copyright Holder(s) and the Author(s) or with their explicit written permission.

5) The Font Software, modified or unmodified, in part or in whole, must be distributed entirely under this license, and must not be distributed under any other license. The requirement for fonts to remain under this license does not apply to any document created using the Font Software.

TERMINATION

This license becomes null and void if any of the above conditions are not met.

DISCLAIMER

THE FONT SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.
```

## Chocolatey Software Component Licenses

### Chocolatey Open Source

Chocolatey Open Source components fall under the [Apache v2.0 license](https://www.apache.org/licenses/LICENSE-2.0).

```text
https://www.apache.org/licenses/LICENSE-2.0
```

* [choco-theme](https://github.com/chocolatey/choco-theme) - [License terms](https://github.com/chocolatey/choco-theme/blob/f840b0d61e27d352fab6611c12f891dc4d6e4f7d/LICENSE)

## choco-theme

### Apache v2.0 License

#### @playwright/test@1.52.0

[@playwright/test](https://github.com/microsoft/playwright) - [License terms.](https://github.com/microsoft/playwright/blob/471930b1ceae03c9e66e0eb80c1364a1a788e7db/LICENSE)

#### fuse.js@7.1.0

[fuse.js](https://github.com/krisk/Fuse) - [License terms.](https://github.com/krisk/Fuse/blob/8119c18862f7df585688b1320ff307eb19f8ff89/LICENSE)

#### typescript@5.8.3

[typescript](https://github.com/microsoft/TypeScript) - [License terms.](https://github.com/microsoft/TypeScript/blob/83dc0bb2ed91fe0815ab28dc3ff95fae7425e413/LICENSE.txt)

### Attribution 4.0 International License

#### @fortawesome/fontawesome-free@6.7.2

[@fortawesome/fontawesome-free](https://github.com/FortAwesome/Font-Awesome) - [License terms.](https://github.com/FortAwesome/Font-Awesome/blob/af620534bfc3c2d4cbefcfeec29603bbe7809e64/LICENSE.txt)

### BSD-2-Clause License

#### @typescript-eslint/parser@7.18.0

[@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint) - [License terms.](https://github.com/typescript-eslint/typescript-eslint/blob/35cf3d2b2b9611c3812b120c461d863c7881ac04/LICENSE)

### ISC License

#### chartist-plugin-legend@0.6.2

[chartist-plugin-legend](https://github.com/CodeYellowBV/chartist-plugin-legend) - [License terms.](https://github.com/CodeYellowBV/chartist-plugin-legend/blob/4e86f4352b0a3041f3a36c487499b1bec1108e56/LICENSE)

#### eslint-plugin-promise@6.6.0

[eslint-plugin-promise](https://github.com/eslint-community/eslint-plugin-promise) - [License terms.](https://github.com/eslint-community/eslint-plugin-promise/blob/fa482cc1134f5669b2dd9f56ea2ef9e96c3c30a0/LICENSE.md)

#### rimraf@5.0.10

[rimraf](https://github.com/isaacs/rimraf) - [License terms.](https://github.com/isaacs/rimraf/blob/982faa77dc2398f5e4e1daa9a8f35d3bb82168c0/LICENSE)

### MIT License

#### @eonasdan/tempus-dominus@6.10.3

[@eonasdan/tempus-dominus](https://github.com/Eonasdan/tempus-dominus) - [License terms.](https://github.com/Eonasdan/tempus-dominus/blob/63c1edb612f191912864f4070620a625d0ddadec/LICENSE)

#### @eslint/eslintrc@3.3.1

[@eslint/eslintrc](https://github.com/eslint/eslintrc) - [License terms.](https://github.com/eslint/eslintrc/blob/556e80029f01d07758ab1f5801bc9421bca4b072/LICENSE)

#### @eslint/js@9.25.1

[@eslint/js](https://github.com/eslint/eslint) - [License terms.](https://github.com/eslint/eslint/blob/3ed4b3652d9fe3dfa4017d22a6ddbd15e3c6cd7a/LICENSE)

#### @fortawesome/fontawesome-free@6.7.2

[@fortawesome/fontawesome-free](https://github.com/FortAwesome/Font-Awesome) - [License terms.](https://github.com/FortAwesome/Font-Awesome/blob/af620534bfc3c2d4cbefcfeec29603bbe7809e64/LICENSE.txt)

#### @microsoft/signalr@8.0.7

[@microsoft/signalr](https://github.com/dotnet/aspnetcore) - [License terms.](https://github.com/dotnet/aspnetcore/blob/2f1db20456007c9515068a35a65afdf99af70bc6/LICENSE.txt)

#### @types/bootstrap@5.2.10

[@types/bootstrap](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/bootstrap) - [License terms.](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/451dc8fc19383bc12af59522020e571957f1684e/LICENSE)

#### @types/luxon@3.6.2

[@types/luxon](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/luxon) - [License terms.](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/f16051d13fd3f5c6e5a00f37d9c9e6ced225ea72/LICENSE)

#### @types/node@20.17.30

[@types/node](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/node) - [License terms.](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/ab6216cd4fb4c8e7f400937ed287bd78d88e6ecd/LICENSE)

#### @typescript-eslint/eslint-plugin@7.18.0

[@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint) - [License terms.](https://github.com/typescript-eslint/typescript-eslint/blob/35cf3d2b2b9611c3812b120c461d863c7881ac04/LICENSE)

#### abp-web-resources@5.9.3

[abp-web-resources](https://github.com/aspnetboilerplate/bower-abp-resources) - [License terms.](https://github.com/aspnetboilerplate/bower-abp-resources/blob/77305bc69ff614ea202c6b46f8b482c2aebf45ae/LICENSE)

#### axe-html-reporter@2.2.11

[axe-html-reporter](https://github.com/lpelypenko/axe-html-reporter) - [License terms.](https://github.com/lpelypenko/axe-html-reporter/blob/0f6b7832690708716b40a7113f1b7c8561cdefba/LICENSE)

#### block-ui@2.70.1

[block-ui](https://github.com/malsup/blockui) - [License terms.](https://malsup.github.io/mit-license.txt)

#### bootstrap@5.3.3

[bootstrap](https://github.com/twbs/bootstrap) - [License terms.](https://github.com/twbs/bootstrap/blob/6e1f75f420f68e1d52733b8e407fc7c3766c9dba/LICENSE)

#### chartist@0.11.4

[chartist](https://github.com/gionkunz/chartist-js) - [License terms.](https://github.com/gionkunz/chartist-js/blob/c55b2c129c3fc4e447bbea2f3bbe2b3246fd9eb9/LICENSE-MIT)

#### clipboard@2.0.11

[clipboard](https://github.com/zenorocha/clipboard.js) - [License terms.](https://github.com/zenorocha/clipboard.js/blob/2b2f9eef6fd1cf951612740e16e422db2848c00a/LICENSE)

#### cropperjs@1.6.2

[cropperjs](https://github.com/fengyuanchen/cropperjs) - [License terms.](https://github.com/fengyuanchen/cropperjs/blob/da3f6f7d4b9c29c7234ddf114c71a27a269855f0/LICENSE)

#### cssnano@cssnano@6.1.2

[cssnano](https://github.com/cssnano/cssnano) - [License terms.](https://github.com/cssnano/cssnano/blob/760ba29a4255c6a4ad39e2dfba1b15ab72d9c382/LICENSE-MIT)

#### datatables.net-bs5@2.2.2

[datatables.net-bs5](https://github.com/DataTables/Dist-DataTables-Bootstrap5) - [License terms.](https://github.com/DataTables/Dist-DataTables-Bootstrap5/blob/296f9e8d155b2a6656452711b401889c6e2c32f5/License.txt)

#### datatables.net-dt@2.2.2

[datatables.net-dt](https://github.com/DataTables/Dist-DataTables-DataTables) - [License terms.](https://github.com/DataTables/Dist-DataTables-DataTables/blob/b90fd31f6b4a1907c7271d8386a93d2afc76afd8/License.txt)

#### esbuild@0.25.2

[esbuild](https://github.com/evanw/esbuild) - [License terms.](https://github.com/evanw/esbuild/blob/4475787eef4c4923b92b9fa37ebba1c88b9e1d9b/LICENSE.md)

#### eslint@9.25.1

[eslint](https://github.com/eslint/eslint) - [License terms.](https://github.com/eslint/eslint/blob/3ed4b3652d9fe3dfa4017d22a6ddbd15e3c6cd7a/LICENSE)

#### eslint-config-standard@17.1.0

[eslint-config-standard](https://github.com/standard/eslint-config-standard) - [License terms.](https://github.com/standard/eslint-config-standard/blob/7d01bbc373bf3bb7374b698323032077ad05f6b1/LICENSE)

#### eslint-plugin-import@2.31.0

[eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) - [License terms.](https://github.com/import-js/eslint-plugin-import/blob/91f809b28323bfbd27749bae84daed00511b07e5/LICENSE)

#### eslint-plugin-n@16.6.2

[eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n) - [License terms.](https://github.com/eslint-community/eslint-plugin-n/blob/ec5badbca03b8e88c594757e4d5c391370727892/LICENSE)

#### eslint-plugin-playwright@1.8.3

[eslint-plugin-playwright](https://github.com/playwright-community/eslint-plugin-playwright) - [License terms.](https://github.com/playwright-community/eslint-plugin-playwright/blob/591692d0664b19adfbd1e9f3e39905e639b5ff1e/LICENSE)

#### flatpickr@4.6.13

[flatpickr](https://github.com/chmln/flatpickr) - [License terms.](https://github.com/chmln/flatpickr/blob/82df19a8a595bb9c008da93b30f241c4155fa058/LICENSE.md)

#### globals@15.15.0

[globals](https://github.com/sindresorhus/globals) - [License terms.](https://github.com/sindresorhus/globals/blob/8a43ab65056483c0248c7be3a69fdb2866d859a2/license)

#### jquery@3.7.1

[jquery](https://github.com/jquery/jquery) - [License terms.](https://github.com/jquery/jquery/blob/f79d5f1a337528940ab7029d4f8bbba72326f269/LICENSE.txt)

#### jquery-serializejson@3.2.1

[jquery-serializejson](https://github.com/marioizquierdo/jquery.serializeJSON) - [License terms.](https://github.com/marioizquierdo/jquery.serializeJSON/blob/54b151140878253ab1a2a1f5c6a40e0e56d63af7/LICENSE.txt)

#### jquery-validation@1.21.0

[jquery-validation](https://github.com/jquery-validation/jquery-validation) - [License terms.](https://github.com/jquery-validation/jquery-validation/blob/b4f8d54633adb224457790d2bd48673d0cd984b4/LICENSE.md)

#### jstree@3.3.17

[jstree](https://github.com/vakata/jstree) - [License terms.](https://github.com/vakata/jstree/blob/6256df013ebd98aea138402d8ac96db3efe0c0da/LICENSE-MIT)

#### luxon@3.6.1

[luxon](https://github.com/moment/luxon) - [License terms.](https://github.com/moment/luxon/blob/93c85a384853a728184e5820d1a75e84383b1e82/LICENSE.md)

#### marked@12.0.2

[marked](https://github.com/markedjs/marked) - [License terms.](https://github.com/markedjs/marked/blob/c6a98ea66c36d12255543e2fabd8f8236dbc5276/LICENSE.md)

#### moment@2.30.1

[moment](https://github.com/moment/moment) - [License terms.](https://github.com/moment/moment/blob/485d9a7d709bd5f3869a7ad24630cf0746d072dc/LICENSE)

#### moment-timezone@0.5.48

[moment-timezone](https://github.com/moment/moment-timezone) - [License terms.](https://github.com/moment/moment-timezone/blob/fcec4545800e8980a956acb2f443b0f16d9cdb16/LICENSE)

#### mustache@4.2.0

[mustache](https://github.com/janl/mustache.js) - [License terms.](https://github.com/janl/mustache.js/blob/bd29972ab8a0f4c592f35483615ab9a274396300/LICENSE)

#### npm-run-all2@6.2.6

[npm-run-all2](https://github.com/bcomnes/npm-run-all2) - [License terms.](https://github.com/bcomnes/npm-run-all2/blob/67a6356a185f6ca5b4a39d88613c8aa491c648c0/LICENSE)

#### postcss@8.5.3

[postcss](https://github.com/postcss/postcss) - [License terms.](https://github.com/postcss/postcss/blob/22c309d32924e1eeb33c80a6a50b7ba8a43a1832/LICENSE)

#### postcss-cli@11.0.1

[postcss-cli](https://github.com/postcss/postcss-cli) - [License terms.](https://github.com/postcss/postcss-cli/blob/7bea18069b334b0d537d5c772ce20b1637c7e5d6/LICENSE)

#### purgecss@6.0.0

[purgecss](https://github.com/FullHuman/purgecss) - [License terms.](https://github.com/FullHuman/purgecss/blob/152ccba46e781902f302b7adca1788a6909e9569/LICENSE)

#### pwstrength-bootstrap@3.1.3

[pwstrength-bootstrap](https://github.com/ablanco/jquery.pwstrength.bootstrap) - [License terms.](https://github.com/ablanco/jquery.pwstrength.bootstrap/blob/7dd598f7088bff1146c4e040eff217f37aee600f/MIT-LICENSE.txt)

#### sortablejs@1.15.6

[sortablejs](https://github.com/SortableJS/Sortable) - [License terms.](https://github.com/SortableJS/Sortable/blob/63ecb31937d19fcb30aa924e82ee8a769ef34492/LICENSE)

#### spin.js@4.1.2

[spin.js](https://github.com/fgnass/spin.js) - [License terms.](https://github.com/fgnass/spin.js/blob/653e79c5ef1f068e5a1a31da5b79b6d1e1b1674d/LICENSE.md)

#### stylelint@16.18.0

[stylelint](https://github.com/stylelint/stylelint) - [License terms.](https://github.com/stylelint/stylelint/blob/1cc5e8b33ba97c816d40e4b330aa8073d07ca124/LICENSE)

#### stylelint-config-standard@36.0.1

[stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) - [License terms.](https://github.com/stylelint/stylelint-config-standard/blob/01ac06819094f545656569e538d857ed9d816aec/LICENSE)

#### stylelint-config-standard-scss@13.1.0

[stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss) - [License terms.](https://github.com/stylelint-scss/stylelint-config-standard-scss/blob/c2e1f8cbd26fc9a55c6ba045d89ed2ba4ed41d96/LICENSE)

#### stylelint-config-twbs-bootstrap@14.2.0

[stylelint-config-twbs-bootstrap](https://github.com/twbs/stylelint-config-twbs-bootstrap) - [License terms.](https://github.com/twbs/stylelint-config-twbs-bootstrap/blob/cf7718c37234a44312b2aba39077ca152287b10e/LICENSE)

#### sweetalert2@11.19.1

[sweetalert2](https://github.com/sweetalert2/sweetalert2) - [License terms.](https://github.com/sweetalert2/sweetalert2/blob/14582d912a0852d435deffe8e87121981355919e/LICENSE)

#### timeago@1.6.7

[timeago](https://github.com/rmm5t/jquery-timeago) - [License terms.](https://github.com/rmm5t/jquery-timeago/blob/48fdda3ca724dcd655e8e990f6d7fbd203718905/LICENSE.txt)

#### ts-node@10.9.2

[ts-node](https://github.com/TypeStrong/ts-node) - [License terms.](https://github.com/TypeStrong/ts-node/blob/057ac1beb118f9c42d21e876a17320ad73ea6be2/LICENSE)

#### tsx@4.19.3

[tsx](https://github.com/privatenumber/tsx) - [License terms.](https://github.com/privatenumber/tsx/blob/e04e6c6ccb56f74db5036c358d6c6b24bebe6319/LICENSE)

#### underscore@1.13.7

[underscore](https://github.com/jashkenas/underscore) - [License terms.](https://github.com/jashkenas/underscore/blob/d2e7e613a597bec6b16c946e42c91950dcc1a215/LICENSE)

### MIT No Attribution License

#### postcss-preset-env@9.6.0

[postcss-preset-env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env) - [License terms.](https://github.com/csstools/postcss-plugins/blob/5d45f917601848f9d41f23424de4a98133e5bc2b/LICENSE.md)

### Mozilla Public License 2.0 License

#### @axe-core/playwright@4.10.1

[@axe-core/playwright](https://github.com/dequelabs/axe-core-npm) - [License terms.](https://github.com/dequelabs/axe-core-npm/blob/b4f5cc4283708c14c9529a9280a530db40f3c7ce/LICENSE)

### SIL OPEN FONT 1.1 LICENSE

#### @fortawesome/fontawesome-free@6.7.2

[@fortawesome/fontawesome-free](https://github.com/FortAwesome/Font-Awesome) - [License terms.](https://github.com/FortAwesome/Font-Awesome/blob/af620534bfc3c2d4cbefcfeec29603bbe7809e64/LICENSE.txt)