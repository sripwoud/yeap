import { Injectable, OnModuleInit } from '@nestjs/common'
import type { CreateQuestionDto } from 'server/questions/dto/create-question.dto'
import { SupabaseService } from 'server/supabase/supabase.service'

@Injectable()
export class QuestionsService implements OnModuleInit {
  private resource = 'questions' as const

  constructor(private readonly supabase: SupabaseService) {}

  onModuleInit() {
    this.supabase.subscribe(this.resource)
  }

  async create(createQuestionDto: CreateQuestionDto) {
    return this.supabase.from(this.resource).insert(createQuestionDto)
  }

  async findAll(groupId: string) {
    const { data } = await this.supabase.from(this.resource).select().eq('group_id', groupId).order(
      'created_at',
      { ascending: false },
    )
    return data ?? []
  }
}
