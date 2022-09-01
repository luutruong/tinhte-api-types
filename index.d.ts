export namespace TinhteApi {
  type ThreadPermissionsKeys = 
    | 'view' | 'delete' | 'follow' | 'post' | 'upload_attachment' | 'edit_prefix' 
    | 'edit_tags' | 'edit_title' | 'edit_image'
    | 'set_image_cover'
    | 'tinhtemods_redirect'
    | 'reply_bans';
  type ThreadLinksKeys = 'permalink' | 'detail' | 'followers' | 'forum' 
  | 'posts' | 'first_poster' | 'fist_poster_avatar' | 'first_post' | 'last_poster' | 'last_post' 
  | 'image'
  | 'edit_image';

  type PostPermissionsKey = 'view' | 'edit' | 'delete' | 'reply' | 'like' | 'report' | 'upload_attachment' | 'vote';

  export interface Thread {
    thread_id: number
    forum_id: number
    thread_title: string
    thread_view_count: number
    creator_user_id: number
    creator_username: string
    thread_create_date: number
    thread_update_date: number
    thread_is_new: boolean
    user_is_ignored: boolean
    thread_post_count: number
    thread_is_published: boolean
    thread_is_deleted: boolean
    thread_is_sticky: boolean
    thread_is_followed: boolean
    first_post?: Post

    thread_prefixes?: Array<{
      prefix_id: number
      prefix_title: string
    }>

    thread_tags: {[key: number]: string}
    links: Record<ThreadLinksKeys, string>
    permissions: Record<ThreadPermissionsKeys, boolean>
    rating_total: number | null
    rating_count: number | null
    creator_has_verified_badge: boolean
    thread_image?: {
      link: string
      width: number
      height: number
      display_mode: string
    }
    thread_thumbnail?: {
      link: string
      width: number
      height: number
    }
    is_draft: boolean
    thread_is_bookmark: boolean
    user_is_followed: boolean
    user_thread_count: number
    user_follower_count: number
    user_like_count: number
    fp_permissions?: Record<'stick' | 'unstick' | 'delete', boolean>
    thread_tags_extended: Array<{
      tag_id: number
      tag: string
      tag_url: string
    }> 
  }

  export interface Post {
    post_id: number
    thread_id: number
    poster_user_id: number
    poster_username: string
    post_create_date: number
    post_body: string
    post_body_html: string
    post_body_plain_text: string
    signature?: string
    signature_html?: string
    signature_plain_text?: string
    post_like_count: number
    post_attachment_count: number
    like_users: Array<{
      user_id: number
      username: string
      reaction_id: number
    }>
    user_is_ignored: boolean
    post_is_published: boolean
    post_is_deleted: boolean
    post_update_date: number
    post_is_first_post: boolean
    attachments?: Attachment[]

    links: {
      permalink: string
      detail: string
      thread: string
      poster: string
      likes: string
      report: string
      attachments: string
      poster_avatar: string
    }

    permissions: Record<PostPermissionsKey, boolean>

    poster_has_verified_badge: boolean
    post_reaction_total: number
    post_reactions: {[key: number]: number}
    post_visitor_reaction_id?: number
    sticker: any[]
    poster_rank?: {
      rank_level: number
      rank_name: string
      rank_group_id: number
      rank_points: number
    }
    user_is_followed: boolean
    fp_permissions: Record<'delete', boolean>
  }

  export interface Attachment {
    attachment_id: number
    attachment_download_count: number
    filename: string
    links: {
      permalink: string
      data: string
      thumbnail: string
      post: string
    }
    attachment_width: number
    attachment_height: number
    attachment_is_video: boolean
    permissions: Record<'view' | 'delete', boolean>
    attachment_is_inserted: boolean
  }
}
